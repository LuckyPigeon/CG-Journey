#include <stdio.h>
#include <string.h>
#include <cmath>

#include <GL/glew.h>
#include <GLFW/glfw3.h>

#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

// Window initialisation
const GLint WIDTH = 800, HEIGHT = 600;
const float toRadians = 3.1415926f / 180.0f;

GLuint VAO, VBO, shader, uniformModel;

bool direction = true;
float triOffset = 0.0f;
float triMaxoffset = 0.7f;
float triIncrement = 0.025f;

// Current rotate angle
float curAngle = 0.0f;

// Scaling variables
float curScale = 0.4f;
float maxScale = 0.8f;
float minScale = 0.1f;
float scaleDirection = true;

// Vertex Shader

// X axis translation by uniform variable
/*static const char * vShader = "										\n\
#version 330															\n\
																		\n\
layout(location = 0) in vec3 pos;										\n\
																		\n\
uniform float xMove;													\n\
																		\n\
void main() {															\n\
	gl_Position = vec4(0.4 * pos.x + xMove, 0.4 * pos.y, pos.z, 1.0);	\n\
}																		\n\
";*/

// X axis translation by matrix transformation
static const char * vShader = "											\n\
#version 330															\n\
																		\n\
layout(location = 0) in vec3 pos;										\n\
																		\n\
uniform mat4 model;														\n\
																		\n\
void main() {															\n\
	gl_Position = model * vec4(pos, 1.0);	\n\
}																		\n\
";

// Fragment Shader
static const char * fShader = "									\n\
#version 330													\n\
																\n\
out vec4 colour;												\n\
																\n\
void main() {													\n\
	colour = vec4(0.0, 0.0, 1.0, 1.0);							\n\
}																\n\
";

void CreateTriangle() {
	GLfloat vertices[] = {
		-1.0f, -1.0f, 0.0f,
		1.0f, -1.0f, 0.0,
		0.0f, 1.0f, 0.0f
	};

	glGenVertexArrays(1, &VAO);
	glBindVertexArray(VAO);

	glGenBuffers(1, &VBO);
	glBindBuffer(GL_ARRAY_BUFFER, VBO);
	glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

	glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, 0);
	glEnableVertexArrayAttrib(VAO, 0);

	glBindBuffer(GL_ARRAY_BUFFER, 0);

	glBindVertexArray(0);
}

void AddShader(GLuint shaderProgram, const char * shaderCode, GLenum shaderType) {
	GLuint theShader = glCreateShader(shaderType);

	const GLchar * theCode;
	theCode = shaderCode;

	GLint codeLength;
	codeLength = strlen(shaderCode);

	glShaderSource(theShader, 1, &theCode, &codeLength);
	glCompileShader(theShader);

	GLint result = 0;
	GLchar eLog[1024] = { 0 };

	glGetShaderiv(theShader, GL_COMPILE_STATUS, &result);

	if (!result) {
		glGetShaderInfoLog(theShader, sizeof(eLog), nullptr, eLog);
		printf("Error compiling the %d shader: '%s'\n", shaderType, eLog);
		return;
	}

	glAttachShader(shaderProgram, theShader);
	return;
}

void CompileShaders() {
	shader = glCreateProgram();

	if (!shader) {
		printf("Error creating shader program!\n");
		return;
	}

	AddShader(shader, vShader, GL_VERTEX_SHADER);
	AddShader(shader, fShader, GL_FRAGMENT_SHADER);

	GLint result = 0;
	GLchar eLog[1024] = { 0 };

	glLinkProgram(shader);
	glGetProgramiv(shader, GL_LINK_STATUS, &result);

	if (!result) {
		glGetProgramInfoLog(shader, sizeof(eLog), nullptr, eLog);
		printf("Error linking program: '%s'\n", eLog);
		return;
	}

	glValidateProgram(shader);
	glGetProgramiv(shader, GL_VALIDATE_STATUS, &result);

	if (!result) {
		glGetProgramInfoLog(shader, sizeof(eLog), nullptr, eLog);
		printf("Error validating program: '%s'\n", eLog);
		return;
	}

	uniformModel = glGetUniformLocation(shader, "model");
}

int main() {
	// Initialise GLFW
	if (!glfwInit())
	{
		printf("GLFW initialisation failed!");
		glfwTerminate();
		return 1;
	}

	// Setup GLFW window properties
	// OpenGL version
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
	// Core Profile
	glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
	// Allow Forward Compatbility
	glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);

	// Create the window
	GLFWwindow *mainWindow = glfwCreateWindow(WIDTH, HEIGHT, "Test Window", NULL, NULL);
	if (!mainWindow)
	{
		printf("GLFW window creation failed!");
		glfwTerminate();
		return 1;
	}

	// Get Buffer Size information
	int bufferWidth, bufferHeight;
	glfwGetFramebufferSize(mainWindow, &bufferWidth, &bufferHeight);

	// Set context for GLEW to use
	glfwMakeContextCurrent(mainWindow);

	// Allow modern extension features
	glewExperimental = GL_TRUE;

	if (glewInit() != GLEW_OK)
	{
		printf("GLEW initialisation failed!");
		glfwDestroyWindow(mainWindow);
		glfwTerminate();
		return 1;
	}

	// Setup Viewport size
	glViewport(0, 0, bufferWidth, bufferHeight);

	CreateTriangle();
	CompileShaders();

	// Loop until window closed
	while (!glfwWindowShouldClose(mainWindow))
	{
		// Get + Handle user input events
		glfwPollEvents();

		// Move left and right repeatly
		if (direction) {
			triOffset += triIncrement;
		}
		else {
			triOffset -= triIncrement;
		}

		if (abs(triOffset) >= triMaxoffset) {
			direction = !direction;
		}

		// Set current rotate angle
		curAngle += 1.0f;
		
		if (curAngle >= 360) {
			curAngle -= 360;
		}

		if (scaleDirection) {
			curScale += 0.001f;
		}
		else {
			curScale -= 0.001f;
		}

		if (curScale >= maxScale || curScale <= minScale) {
			scaleDirection = !scaleDirection;
		}

		// Clear window
		glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
		glClear(GL_COLOR_BUFFER_BIT);

		glUseProgram(shader);

		// Transformation
		glm::mat4 model(1.0f);
		model = glm::translate(model, glm::vec3(triOffset, 0.0f, 0.0f));
		model = glm::rotate(model, curAngle * toRadians, glm::vec3(0.0f, 0.0f, 1.0f)); // Rotate 45 degree along z axis
		model = glm::scale(model, glm::vec3(curScale, curScale, 1.0f));

		//glUniform1f(uniformXMove, triOffset);
		glUniformMatrix4fv(uniformModel, 1, GL_FALSE, glm::value_ptr(model));

		glBindVertexArray(VAO);
		glDrawArrays(GL_TRIANGLES, 0, 3);
		glBindVertexArray(0);

		glUseProgram(0);

		glfwSwapBuffers(mainWindow);
	}

	return 0;
}