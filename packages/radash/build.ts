import { build } from 'esbuild'

build({
  entryPoints: ['src/index.ts'],
  outdir: 'dist'
})
