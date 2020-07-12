export function isBetweenNumbers(numberToCheck, a, b) {
  if (a === b) {
    throw new Error('Numbers are the same')
  }
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  return numberToCheck >= min && numberToCheck <= max
}

/**
 * Function to get a random number between a min and max number
 *
 * @name getRandomNumberBetweenNumbers
 * @function
 * @param {Number} min - The min limit
 * @param {Number} max - The max limit
 * @return {Number} - Returns a random number between params
*/

export function getRandomNumberBetweenNumbers(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);

  return randomNumber === 0 ? getRandomNumberBetweenNumbers(min, max) : randomNumber;
}


/**
 * Function to create a node with specific properties
 *
 * @name createNode
 * @function
 * @param {Object} nodeProperties - The properties that the node should receive
 * @param {String} node- The max limit
*/
export function createNode(node, nodeProperties) {
  const { id, currentPosition } = nodeProperties;
  const span = document.createElement(node);
  span.classList.add('particle');
  span.setAttribute('id', `particle_${id}`);

  span.style.cssText = `left: ${currentPosition.x}px; top: ${currentPosition.y}px`;

  addChildToNode(nodeProperties.parent, span);

  return span;
}


/**
 * Function to insert a child into a container
 *
 * @name addChildToNode
 * @function
 * @param {Number} parentNode - Container where the @param childNode will be
 * @param {Number} childNode - childNode that should be placed inside @param parentNode
*/
function addChildToNode(parentNode, childNode) {
  parentNode.appendChild(childNode);
}
