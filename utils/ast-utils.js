"use strict";

const anyFunctionPattern = /^(?:Function(?:Declaration|Expression)|ArrowFunctionExpression)$/u;

module.exports = {
	isSemicolonToken(token) {
		return token.value === ";" && token.type === "Punctuator";
	},

	isClosingBraceToken(token) {
		return token.value === "}" && token.type === "Punctuator";
	},

	isTokenOnSameLine(left, right) {
		return left.loc.end.line === right.loc.start.line;
	},

	getUpperFunction(node) {
		for (let currentNode = node; currentNode; currentNode = currentNode.parent) {
			if (anyFunctionPattern.test(currentNode.type)) {
				return currentNode;
			}
		}
		return null;
	},

	getNextLocation(sourceCode, { line, column }) {
		if (column < sourceCode.lines[line - 1].length) {
			return {
				line,
				column: column + 1
			};
		}

		if (line < sourceCode.lines.length) {
			return {
				line: line + 1,
				column: 0
			};
		}

		return null;
	},
};
