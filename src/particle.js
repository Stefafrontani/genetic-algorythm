import {
  getRandomNumberBetweenNumbers,
  isBetweenNumbers,
  createNode } from './helpers';
import './particle.css'

/**
 * Constructor function to intantiate a particle inside a parent
 *
 * @name Particle
 * @function
 * @param {HTMLNode} parent - Limits that gives you javsascript when calling getBoundingClientRect method
 * @param {Number} id - Limits that gives you javsascript when calling getBoundingClientRect method
 * @return {Object} - Particle instance
*/

function Particle(parent, id, coordinates) {
  let currentX, currentY;
  this.parent = parent;
  this.parentLimits = parent.getBoundingClientRect();
  if (coordinates && (coordinates.x || coordinates.x === 0)) {
    currentX = coordinates.x;
  } else {
    currentX = getRandomNumberBetweenNumbers(10, this.parentLimits.width - 10);
  };
  if (coordinates && (coordinates.y || coordinates.y === 0)) {
    currentY = coordinates.y;
  } else {
    currentY = getRandomNumberBetweenNumbers(10, this.parentLimits.height - 10);
  };
  this.currentPosition = {
    x: currentX,
    y: currentY
  };
  this.currentVelocity = {};
  this.roots = [];
  this.nextPosition = null;
  this.timeToMove = 0;
  this.id = id;
  this.simulationSpeed = 100 // In px/s

}

Particle.prototype.startMoving = function(velocity) {
  this.setVelocity('', velocity);
  if(this.nextPosition){
    this.setCoordinate('currentPosition', this.nextPosition);
  }

  const { vx, vy } = this.currentVelocity;
  const b = this.currentPosition.y - ((vy/vx) * this.currentPosition.x);

  // Corta eje x inferior ---> y = 0
  const x1 = Math.floor(- ( b * ( vx / vy ) ));
  let px1Coordinates = { x: x1, y: 0, direction: { X0: true} };

  // Corta eje x superior y = this.parentLimits.height;
  const x2 = Math.floor(( ( this.parentLimits.height - b ) * ( vx / vy ) ));
  let px2Coordinates = { x: x2, y: this.parentLimits.height, direction: { XP: true } };

  // Corta eje y inferior ---> x = 0
  const y1 = Math.floor(( ( vy / vx ) * 0 ) + b);
  let py1Coordinates = { x: 0, y: y1, direction: { Y0: true } };

  // Corta eje y superior x = this.parentLimits.height;
  const y2 = Math.floor(( ( vy / vx ) * this.parentLimits.width ) + b);
  let py2Coordinates = { x: this.parentLimits.width, y: y2, direction: { YP: true } };

  let roots = [px1Coordinates, px2Coordinates, py1Coordinates, py2Coordinates];

  this.roots = roots.filter((root) => {
    return isBetweenNumbers(root.x, 0, this.parentLimits.width) && isBetweenNumbers(root.y, 0, this.parentLimits.height);
  });


// Borrar
/*
  let container = document.querySelector('#platform');

  let px1 = new Particle(container, 2, { x: x1, y: 0 })
  createNode('span', px1);
  let px2 = new Particle(container, 3, { x: x2, y: this.parentLimits.height })
  createNode('span', px2);
  let py1 = new Particle(container, 4, { x: 0, y: y1 })
  createNode('span', py1);
  let py2 = new Particle(container, 5, { x: this.parentLimits.width, y: y2 })
  createNode('span', py2);
*/
// Borrar

  let nextPosition = this.calculateNextPosition();
  this.setCoordinate('nextPosition', nextPosition);

  this.updateNode(); // Update coordinates and transition
};



/**
 * Set a coordinate
 *
 * @name setCoordinate
 * @function
 * @param {String} type - Type of coordinate you want ti update - i.e.: nextPosition, currentPosition
 * @param {Object} coordinate - Coordinate'S value to set
 */
Particle.prototype.setCoordinate = function(type, coordinate) {
  this[type] = coordinate;
};


/**
 * Set the velocity
 *
 * @name setVelocity
 * @function
 * @param {String} type - Type of coordinate you want ti update - i.e.: nextPosition, currentPosition
 * @param {Object} coordinate - Coordinate'S value to set
 */
Particle.prototype.setVelocity = function(type, velocity) {
  this.currentVelocity = velocity;
};



Particle.prototype.calculateNextPosition = function() {
  let isVxPositivie = this.currentVelocity.vx > 0;

  let currentPosition = this.currentPosition;

  // "nextPosition" will be the intersection with a parent container limit
  let nextPosition = this.roots.filter(function(root){ return isVxPositivie ? root.x > currentPosition.x : root.x < currentPosition.x } )[0]
  return nextPosition;
};



Particle.prototype.setTransitionSpeed = function() {
  this.timeToMove = this.calculateTransitionSpeed()*1000;
};



Particle.prototype.updateNode = function() {
  let particleNode = document.querySelector(`#particle_${this.id}`);

  let nextCoordinateX = this.nextPosition && this.nextPosition.x;
  let nextCoordinateY = this.nextPosition && this.nextPosition.y;

  this.setTransitionSpeed();

  let transitionConfig = [ { direction: 'left', velocity: 'linear' }, { direction: 'top', velocity: 'linear' } ]
  particleNode.style.cssText = `transition:${this.calculateTransitionSpeed(transitionConfig)}; left: ${nextCoordinateX}px; top: ${nextCoordinateY}px`;
  
  console.log(this.calculateTransitionSpeed(transitionConfig));
}

export default Particle;

Particle.prototype.calculateNextVelocity = function() {
  let velocity = this.currentVelocity;
  let particle = this;

  let { vx, vy } = velocity;

  let tg = vx > 0
            ? vy > 0
              ? 1
              : 4
            : vy > 0
              ? 2
              : 3

  let nextVelocity = calculate();;

  function calculate() {
    switch (tg) {
      case 1:
        if (particle.nextPosition.direction.XP) return { vx, vy: (-1)*vy }
        if (particle.nextPosition.direction.YP) return { vx: (-1)*vx, vy }
        break;
      case 2:
        if (particle.nextPosition.direction.Y0) return { vx: (-1)*vx, vy }
        if (particle.nextPosition.direction.XP) return { vx, vy: (-1)*vy }
        break;
      case 3:
        if (particle.nextPosition.direction.Y0) return { vx: (-1)*vx, vy }
        if (particle.nextPosition.direction.X0) return { vx, vy: (-1)*vy }
        break;
      case 4:
        if (particle.nextPosition.direction.X0) return { vx, vy: (-1)*vy }
        if (particle.nextPosition.direction.YP) return { vx: (-1)*vx, vy }
        break;
      default:
        return velocity;
    }
  };

  console.log(particle);
  console.log('V1', velocity);
  console.log('V2', nextVelocity);
  return nextVelocity
};

Particle.prototype.calculateTransitionSpeed = function(transitionConfig) {
  let transitionX = Math.abs(this.nextPosition.x - this.currentPosition.x)/this.simulationSpeed;
  let transitionY = Math.abs(this.nextPosition.y - this.currentPosition.y)/this.simulationSpeed;
  let transitionTime = Math.max(transitionX, transitionY);

  console.log('(next x --- curr x --- transition', this.nextPosition.x - this.currentPosition.x, transitionX);
  console.log('(next y --- curr y --- transition', this.nextPosition.y - this.currentPosition.y, transitionY);

  console.log('transitionX --- transitionY', transitionX, transitionY);


  let result;

  if (transitionConfig) {
    result = transitionConfig.reduce((acc, curr) => {
      return `${acc && acc+','} ${curr.direction} ${curr.velocity} ${transitionTime}s`
    }, '');
  } else {
    result = transitionTime;
  }

  return result;
};

