const { MODE } = require('./blendMode.js')
const description = 'A generative art example project!'
const baseUri = 'ipfs://'

const layerConfigurations = [
  {
    growEditionSizeTo: 50,
    layersOrder: [
      { name: 'Background' },
      { name: 'Skin Tone' },
      { name: 'Eye Color' },
      { name: 'Hair Color' },
    ],
  },
]

const format = {
  width: 3000,
  height: 3000,
}

const background = {
  generate: true,
  brightness: '80%',
}

const rarityDelimiter = '#'

const uniqueDnaTorrance = 10000

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
}
