// Use absolute paths to avoid OneDrive module resolution issues
const path = require('path')
const root = __dirname

module.exports = {
  plugins: [
    require(path.join(root, 'node_modules', 'tailwindcss')),
    require(path.join(root, 'node_modules', 'autoprefixer')),
  ],
}
