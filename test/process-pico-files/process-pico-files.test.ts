
const { createScopedPicoFiles } = require('../../src/process-pico-files')
const fs = require("fs")

const mockInputCssFileName = 'test.file.1.css'
const mockOutputCssFileName = 'test-file-1.ts'
const rootFolder = '/test/process-pico-files'
const mockInputDirectory = `${process.cwd()}${rootFolder}/test-input-directory`
const mockOutputDirectory = `${process.cwd()}${rootFolder}/test-output-directory`

describe('createScopedPicoFiles', () => {
    beforeEach(() => {
        if(fs.existsSync(mockOutputDirectory)) 
            fs.rmdirSync(mockOutputDirectory, { recursive: true })
		
    })

    test('should correctly process pico css files', () => {
	
        return Promise.all(createScopedPicoFiles(mockInputDirectory, mockOutputDirectory)).then(() => {
            const actualOutput = fs.readFileSync(`${mockOutputDirectory}/${mockOutputCssFileName}`, 'utf8')
            const originalCss = fs.readFileSync(`${mockInputDirectory}/${mockInputCssFileName}`, 'utf8')
            const expectedOutput = `import { css } from '@emotion/css'\n\nexport default css\`\n${originalCss}\n\``

            expect(actualOutput).toEqual(expectedOutput)	
        })
    })
})	

