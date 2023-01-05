#pragma once

//**************************************************************
// This is definition of Window, main utilities include
//
// functions:
//
// Initialise:		Initialize and create a window
// getBufferWidth:	Get buffer width
// getBufferHeight: Get buffer height
// getShouldClose:	Get window close event
// swapBuffers:		Swap buffer if back buffer exist
//
// Variables:
//
// mainWindow:		OpenGL window
// width:			Window width
// height:			Window height
// bufferWidth:		Frame buffer width
// bufferHeight:	Frame buffer height
//**************************************************************

#include "stdio.h"

#include <GL\glew.h>
#include <GLFW\glfw3.h>

class Window
{
public:
	Window();

	Window(GLint windowWidth, GLint windowHeight);

	int Initialise();

	GLint getBufferWidth() { return bufferWidth; }
	GLint getBufferHeight() { return bufferHeight; }

	bool getShouldClose() { return glfwWindowShouldClose(mainWindow); }

	void swapBuffers() { glfwSwapBuffers(mainWindow); }

	~Window();

private:
	GLFWwindow* mainWindow;

	GLint width, height;
	GLint bufferWidth, bufferHeight;
};