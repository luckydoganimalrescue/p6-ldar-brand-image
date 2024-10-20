import * as process from 'node:process'
import esbuild from 'esbuild'

esbuild.build({
  entryPoints: ['./src/presign.ts', './src/brand.ts'],
  bundle: true,
  platform: 'node',
  target: ['node20'],
  outdir: './dist',
  sourcemap: true,
  minify: false,
  external: ['aws-sdk'],
  logLevel: 'info',
}).catch(() => process.exit(1))
