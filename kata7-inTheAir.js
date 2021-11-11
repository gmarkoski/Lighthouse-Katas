//count the number of clean or dirty vs the total and compare against the threshold to see if dirty of clean


function checkAir(samples, threshold) {
  let dirtySamples = 0;

  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirtySamples++
    }

    if ((dirtySamples / samples.length) >= threshold) {
      return 'Polluted'
    }
  }
  return 'clean'
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
