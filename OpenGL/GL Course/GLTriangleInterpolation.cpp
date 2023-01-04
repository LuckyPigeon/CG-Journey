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
// X axis translation by matrix transformation
static const char * vShader = "											\n\
#version 330															\n\
																		\n\
layout(location = 0) in vec3 pos;										\n\
																		\n\
out vec4 vCol;															\n\
																		\n\
uniform mat4 model;														\n\
																		\n\
void main() {															\n\
	gl_Position = model * vec4(pos, 1.0);								\n\
	vCol = vec4(clamp(pos, 0.0f, 1.0f), 1.0f);							\n\
}																		\n\
";

// Fragment Shader
static const char * fShader = "									\n\
#version 330													\n\
																\n\
in vec4 vCol;													\n\
																\n\
out vec4 colour;												\n\
																\n\
void main() {													\n\
	colour = vCol;												\n\
}																\n\
";

void CreateTriangle() {
	GLfloat vertices[] = {
		-1.0f, -1.0f, 1.0f,
		1.0f, -1.0f, 0.0,
		0.0f, 1.0f, 0.0f
	};

	glGenVertexArrays(1, &VAO);
	glBindVertexArray(VAO);

	glGenBuffers(1, &VBO);
	glBindBuffer(GL_ARRAY_BUFFER, VBO);
	glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

	// Default setting to our vectices, means a set of vertices (pos in this case)
	// is from 0 to 3, and it's float type, it doesn't need normalisation (4th parameter)
	// it contains no stride (5th) and no offset (6th).
	glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, 0);
	glEnableVertexArrayAttrib(VAO, 0);

	// unbind VBO and VAO
	glBindBuffer(GL_ARRAY_BUFFER, 0);

	glBindVertexArray(0);
}

void AddShader(GLuint shaderProgram, const char * shaderCode, GLenum shaderType) {
	// Create shader program from different shader type
	GLuint theShader = glCreateShader(shaderType);

	const GLchar * theCode;
	theCode = shaderCode;

	GLint codeLength;
	codeLength = strlen(shaderCode);

	// Bind shader program to shader code, second arg is "how many chunks of code do you have?"
	// (you can put several chunks of code together and form a shader)
	glShaderSource(theShader, 1, &theCode, &codeLength);
	glCompileShader(theShader);

	GLint result = 0;
	GLchar eLog[1024] = { 0 };

	// Get the shader compile status
	glGetShaderiv(theShader, GL_COMPILE_STATUS, &result);

	if (!result) {
		// If shader compiled unsuccessfully, then log the error
		glGetShaderInfoLog(theShader, sizeof(eLog), nullptr, eLog);
		printf("Error compiling the %d shader: '%s'\n", shaderType, eLog);
		return;
	}

	glAttachShader(shaderProgram, theShader);
	return;
}

void CompileShaders() {
	// Create a large shader container
	shader = glCreateProgram();

	if (!shader) {
		printf("Error creating shader program!\n");
		return;
	}

	// Add shaders repectively
	AddShader(shader, vShader, GL_VERTEX_SHADER);
	AddShader(shader, fShader, GL_FRAGMENT_SHADER);

	GLint result = 0;
	GLchar eLog[1024] = { 0 };

	// Create executable program on the GPU
	glLinkProgram(shader);
	// Get the link status, "glGetProgramiv" is a query function
	glGetProgramiv(shader, GL_LINK_STATUS, &result);

	if (!result) {
		// If linked unsuccessfully, then log the error
		glGetProgramInfoLog(shader, sizeof(eLog), nullptr, eLog);
		printf("Error linking program: '%s'\n", eLog);
		return;
	}

	// Validation our shader context is work or not
	glValidateProgram(shader);
	// Get the validate status
	glGetProgramiv(shader, GL_VALIDATE_STATUS, &result);

	if (!result) {
		// If validated unsuccessfully, then log the error
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
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3); // implies 3.x.x
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3); // implies x.3.x
	// Core Profile, means won't be backward compatable
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

	// Get Buffer Size information, how large is width and height buffer
	int bufferWidth, bufferHeight;
	glfwGetFramebufferSize(mainWindow, &bufferWidth, &bufferHeight);

	// Set context for GLEW to use, you can switch windows by pointing to other window
	glfwMakeContextCurrent(mainWindow);

	// Allow modern extension features
	glewExperimental = GL_TRUE;

	if (glewInit() != GLEW_OK)
	{
		printf("GLEW initialisation failed!");
		// Window has been created, need to be destroy
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

		// Clear window, clear all buffer data and replace to black(0.0f, 0.0f, 0.0f, 1.0f)
		glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
		glClear(GL_COLOR_BUFFER_BIT);

		// Actually use the shader program on GPU, you can assign different shader accordingly in different scene.
		glUseProgram(shader);

		// Transformation
		glm::mat4 model(1.0f);
		//model = glm::translate(model, glm::vec3(triOffset, 0.0f, 0.0f));
		//model = glm::rotate(model, curAngle * toRadians, glm::vec3(0.0f, 0.0f, 1.0f)); // Rotate 45 degree along z axis
		//model = glm::scale(model, glm::vec3(curScale, curScale, 1.0f));
		model = glm::scale(model, glm::vec3(0.4f, 0.4f, 1.0f));

		glUniformMatrix4fv(uniformModel, 1, GL_FALSE, glm::value_ptr(model));

		glBindVertexArray(VAO);
		// Tell GL we're drawing a triangle
		glDrawArrays(GL_TRIANGLES, 0, 3);
		glBindVertexArray(0);

		// Unbind the shader program on GPU
		glUseProgram(0);

		glfwSwapBuffers(mainWindow);
	}

	return 0;
}