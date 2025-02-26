import link from '@/helpers/link'

declare global {
  interface Navigator {
    msSaveBlob?: (blob: Blob | File, defaultName?: string) => boolean
  }
}

/**
 * Universal file download.
 *
 * @param {Blob} blob
 * @param {string} filename
 * @param {boolean} [openOnSave]
 */
export default (blob: Blob, filename: string = 'Файл', openOnSave = false) => {
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    // IE workaround for "HTML7007: One or more blob URLs were
    // revoked by closing the blob for which they were created.
    // These URLs will no longer resolve as the data backing
    // the URL has been freed."
    window.navigator.msSaveBlob(blob, filename)
  } else {
    const blobURL = window.URL.createObjectURL(blob)

    link(blobURL, filename, openOnSave)
  }
}
