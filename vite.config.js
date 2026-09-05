import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ command, mode }) => ({
  plugins: [],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'reactPhotoGalleryAdaptive',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
}));
