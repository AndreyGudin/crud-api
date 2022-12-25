import { resolve} from 'path';
import url from "url";
import NodemonPlugin from 'nodemon-webpack-plugin';

const devMode = process.env.NODE_ENV !== 'production' ? 'development' : 'production';
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

console.log(process.env.NODE_ENV);
export default {
  entry: resolve(__dirname, './src/index.ts'),
  mode: devMode,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'server.js',
    path: resolve(__dirname, './dist'),
    clean: true,
    assetModuleFilename: 'assets/logo/[hash][ext][query]',
  },
  plugins: [
    new NodemonPlugin(),
  ],
  watchOptions: {
    ignored: './dist',
  },
};
