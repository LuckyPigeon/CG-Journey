#include "Mesh.h"

// Constructor
Mesh::Mesh() :
	VAO(0), VBO(0), IBO(0), indexCount(0)
{}

// CreateMesh represent create mesh from given vertices and indices
void Mesh::CreateMesh(GLfloat *vertices, unsigned int *indices, unsigned int numOfVertices, unsigned int numOfIndices) {
	indexCount = numOfIndices;

	glGenVertexArrays(1, &VAO);
	glBindVertexArray(VAO);

	glGenBuffers(1, &IBO);
	// GL_ELEMENT_ARRAY_BUFFER is index array buffer
	glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, IBO);
	glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices[0]) * numOfIndices, indices, GL_STATIC_DRAW);

	glGenBuffers(1, &VBO);
	glBindBuffer(GL_ARRAY_BUFFER, VBO);
	glBufferData(GL_ARRAY_BUFFER, sizeof(vertices[0]) * numOfVertices, vertices, GL_STATIC_DRAW);

	// Default setting to our vectices, means a set of vertices (pos in this case)
	// is from 0 to 3, and it's float type, it doesn't need normalisation (4th parameter)
	// it contains no stride (5th) and no offset (6th).
	glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, 0);
	glEnableVertexArrayAttrib(VAO, 0);

	// Unbind VBO and VAO
	glBindBuffer(GL_ARRAY_BUFFER, 0);

	glBindVertexArray(0);

	// IBO should be unbind after VAO
	glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, 0);
}

// RenderMesh represent Render mesh after created
void Mesh::RenderMesh() {
	glBindVertexArray(VAO);
	glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, IBO);
	glDrawElements(GL_TRIANGLES, indexCount, GL_UNSIGNED_INT, 0);
	glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, 0);
	glBindVertexArray(0);
}

// ClearMesh represent release VAO, VBO, IBO buffer and reset variables
void Mesh::ClearMesh() {
	if (IBO != 0) {
		glDeleteBuffers(1, &IBO);
		IBO = 0;
	}

	if (VBO != 0) {
		glDeleteBuffers(1, &VBO);
		VBO = 0;
	}

	if (VAO != 0) {
		glDeleteVertexArrays(1, &VAO);
		VAO = 0;
	}

	indexCount = 0;
}