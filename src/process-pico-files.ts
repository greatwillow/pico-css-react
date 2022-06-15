const fs = require('fs')

const handleReadFilesError = (error: Error) => handleError(error, 'reading files')
const handleReadFileError = (error: Error) => handleError(error, 'reading file')
const handleWriteFileError = (error: Error) => handleError(error, 'writing file')

const logReadFileAction = (file: string) => process.stdout.write(`Reading file: ${file}`)

function handleError(error: Error, message: string): void {
    if(error) 
        process.stderr.write(`Error while ${message} with error: ${error}`)
	
}

function createProcessedFileName(originalFileName: string): string {
    const fileNameParts = originalFileName.split('.')
    const fileNamePartsWithoutExtension = fileNameParts.filter((part, index) => index < fileNameParts.length - 1)
    
    return fileNamePartsWithoutExtension.join('-') + '.ts'
}

function createScopedPicoFile(
    originalFileName: string, 
    originalCss: string,
    outputDirectory: string
): void {
    const processedFileContent = `import { css } from '@emotion/css'\n\nexport default css\`\n${originalCss}\n\``

    const processedFileName = createProcessedFileName(originalFileName)
    const processedFileAndDirectory = `${outputDirectory}/${processedFileName}`

    if(!fs.existsSync(outputDirectory))
        fs.mkdirSync(outputDirectory)
    

    fs.writeFileSync(
        processedFileAndDirectory,
        processedFileContent,
        handleWriteFileError
    )

    return
}

function createScopedPicoFiles(
    inputDirectory: string,
    outputDirectory: string,	
): Array<Promise<void>> {
    const originalPicoFiles = [...fs.readdirSync(inputDirectory, handleReadFilesError)]
    const promises: Array<Promise<void>> = originalPicoFiles.map((originalFileName) => {
        const originalFileAndDirectory = `${inputDirectory}/${originalFileName}`

        logReadFileAction(originalFileAndDirectory)
		
        return new Promise((resolve, reject) => {
            fs.readFile(`${inputDirectory}/${originalFileName}`, async (readFileError: Error, originalCss: string) => {
                if(readFileError) {
                    handleReadFileError(readFileError)
                    reject()
                }
				
                createScopedPicoFile(originalFileName, originalCss, outputDirectory)

                resolve()
            })
        }) 
    })

    return promises
}

async function processFiles(): Promise<void>  {
    const originalCssFilesDirectory = '../node_modules/pico-scoped/files'
    const processedCssFilesDirectory = './styles'

    Promise.all(createScopedPicoFiles(originalCssFilesDirectory, processedCssFilesDirectory)).then(() => {
        process.stdout.write('Successfully completed writing output files.')
    })
}

export {
    createScopedPicoFile,
    createScopedPicoFiles
}

module.exports.processFiles = processFiles


