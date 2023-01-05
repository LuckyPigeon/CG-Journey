#pragma once

//**************************************************************
// This is definition of Shader, main utilities include
//
// functions:
//
// CreateFromString:		Create shader from raw code
// CreateFromFiles:			Create shader from files
// GetProjectionLocation:   Get projection matrix
// GetModelLocation:		Get model matrix
// UseShader:				Use shader
// ClearShader:				Release shader memory and reset vars
//
// Variables:
//
// shaderID:				Shader id
// u_model:					Model matrix
// u_projection:			projection matrix
//**************************************************************

#include <stdio.h>
#include <string>
#include <iostream>
#include <fstream>

#include <GL\glew.h>

class Shader
{
public:
	Shader();

	void CreateFromString(const char* vertexCode, const char* fragmentCode);
	void CreateFromFiles(const char* vertexLocation, const char* fragmentLocation);

	std::string ReadFile(const char* fileLocation);

	GLuint GetProjectionLocation();
	GLuint GetModelLocation();

	void UseShader();
	void ClearShader();

	~Shader();

private:
	GLuint shaderID, u_projection, u_model;

	void CompileShader(const char* vertexCode, const char* fragmentCode);
	void AddShader(GLuint theProgram, const char* shaderCode, GLenum shaderType);
};

