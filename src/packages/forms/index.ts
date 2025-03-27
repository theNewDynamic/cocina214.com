import type { AstroIntegration } from 'astro';


type TndFormsOptions = {
	/**
	 * Default submit text
	 * @default 'Submit'
	 */
	submitCopy?: string;
  forms?: object;
};

export default function tndFormsIntegration(options?: TndFormsOptions): AstroIntegration {
	const submitCopy = options?.submitCopy
  const forms = options?.forms || {}
	const userConfig = {submitCopy, forms}
	return {
		name: 'tnd-forms',
		hooks: {
			'astro:config:setup': async ({ config, updateConfig, addWatchFile }) => {
				const virtualModuleId = 'virtual:tnd-forms-config'
				const resolvedVirtualModuleId = '\0' + virtualModuleId
				updateConfig({
					vite: {
						plugins: [
							{
								name: 'tnd-forms-config',
								resolveId(id) {
										if (id === virtualModuleId) {
												return resolvedVirtualModuleId;
										}
								},
								load(id) {
										if (id === resolvedVirtualModuleId) {
												return `export default ${JSON.stringify(userConfig)}`;
										}
								},
							},
						],
					},
			});
			}
		}
	}
}