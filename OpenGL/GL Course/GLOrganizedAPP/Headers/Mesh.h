#pragma once

//**************************************************************
// This is definition of Mesh, main utilities include

// functions:
//
// CreateMesh: Create mesh from given vertices and indices
// RenderMesh: Render mesh after created
// ClearMesh:  Release VAO, VBO, IBO buffer and reset variables
//
// variables:
//
// VAO:			Vertex Array Object
// VBO:			Vertex Buffer Object
// IBO:			Index Buffer Object
// indexCount:  Number of meshes to bo rendered
//**************************************************************

#include <GL/glew.h>

class Mesh
{
public:
	Mesh();
	void CreateMesh(GLfloat *vertices, unsigned int *indices, unsigned int numOfVertices, unsigned int numOfIndices);
	void RenderMesh();
	void ClearMesh();
	~Mesh();

private:
	GLuint VAO, VBO, IBO;
	GLsizei indexCount;
};

