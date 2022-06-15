
const { createScopedPicoFiles } = require('../../src/process-pico-files')
const fs = require("fs")

const mockInputCssFileName = 'test.file.1.css'
const mockOutputCssFileName = 'test-file-1.ts'
const rootFolder = '/test/process-pico-files'
const mockInputDirectory = `${process.cwd()}${rootFolder}/test-input-directory`
const mockOutputDirectory = `${process.cwd()}${rootFolder}/test-output-directory`
const expectedOutputCssDirectory = `${process.cwd()}${rootFolder}`
const expectedOutputCssFileName = 'expected-output.ts'

describe('createScopedPicoFiles', () => {
    beforeEach(() => {
        if(fs.existsSync(mockOutputDirectory)) 
            fs.rmdirSync(mockOutputDirectory, { recursive: true })
		
    })

    test('should correctly process pico css files', () => {
	
        return Promise.all(createScopedPicoFiles(mockInputDirectory, mockOutputDirectory)).then(() => {
            const actualOutputCss = fs.readFileSync(`${mockOutputDirectory}/${mockOutputCssFileName}`, 'utf8')
            const expectedOutputCss = fs.readFileSync(`${expectedOutputCssDirectory}/${expectedOutputCssFileName}`, 'utf8')

            expect(actualOutputCss).toEqual(expectedOutputCss)	
        })
    })
})	

