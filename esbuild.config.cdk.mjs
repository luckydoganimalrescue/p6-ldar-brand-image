import * as process from 'node:process'
import esbuild from 'esbuild'

esbuild.build({
  entryPoints: ['bin/deploy.ts'],
  bundle: true,
  platform: 'node',
  target: ['node20'],
  outdir: './dist-cdk',
  sourcemap: true,
  minify: true,
  external: ['aws-sdk'],
  logLevel: 'info',
}).catch(() => process.exit(1))
