import Particle from './particle';
import { getRandomNumberBetweenNumbers, createNode } from './helpers';
import './platform.css';

export function createPlatform(parent) {
    let platform = document.createElement('div');
    platform.classList.add('platform_container', 'flex_grow_1');
    platform.setAttribute('id', 'platform');

    parent.appendChild(platform);

    let particles = [];
    for(let i = 0; i < 100; i++) {
      let particle = new Particle(platform, i);
      let particleNode = createNode('span', particle);

      const config = { attributes: true };
      const observer = new MutationObserver(function(mutationsList, observer) {
        mutationsList.forEach(function(mutation){
          let { vx, vy } = particle.calculateNextVelocity();

          console.log('*****************************************')
          console.log('************ NEXT MOVE START ************')
          console.log('*****************************************')

          setTimeout(() => {
            particle.startMoving({
              vx,
              vy
            })
          }, particle.timeToMove + 10);
        });
      });

      observer.observe(particleNode, config);

      particles.push(particle);

      console.log('************** INITIAL -- STARING MOVE **************')
      setTimeout(() => {
        particle.startMoving({
          vx: getRandomNumberBetweenNumbers(-1000, 1000),
          vy: getRandomNumberBetweenNumbers(-1000, 1000)
        })
      }, 1000)
    }

  return platform;
};
