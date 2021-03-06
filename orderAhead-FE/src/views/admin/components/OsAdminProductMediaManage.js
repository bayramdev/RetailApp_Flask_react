import React, { useEffect, useRef, useState } from 'react'
import { Snackbar, Alert, Box, Button, Table, TableBody, TableHead, TableCell, TableRow } from '@mui/material'
import { osServices } from '../../../controllers/_services/ordersystem.service'
import OsIconRemove from '../../../components/order-system/icons/OsIconRemove'
import OsLoading from '../../../components/order-system/OsLoading'


const OsAdminProductMediaManage = (props) => {
  const [medias, setMedias] = useState(props.data)
  const sku = props.sku
  // const [files, setFiles] = useState([])
  const [messageDeleting, setMessageDeleting] = useState('')
  const [selectedFile, setSelectedFile] = useState(false)
  const [isUploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')
  const uploadRef = useRef()
  const [isMessageShown, setMessageShown] = useState(false)

  if (!medias) return (<></>)

  const handleDeleteMedia = (e) => {
    const mediaId = e.currentTarget.getAttribute('data-id')
    if (!mediaId) return
    setMessageDeleting('Deleting media...')
    osServices.osDeleteMedia({media_id: mediaId}).then(response => {
      let updated = medias.filter(media => parseInt(media.media_id) != parseInt(mediaId))
      setMedias(updated)
      setMessageDeleting('')
    })
  }


  const handleSaveClicked = () => {

    const formData = new FormData()
    formData.append('sku', sku)
    if (selectedFile) {
      setUploading(true)
      formData.append('uploadFile', selectedFile, selectedFile.name)
      osServices.osUploadMediaFiles(formData).then(response => {
        const result = response.data
        const newMedia = result.data

        setMessage('File has been uploaded.')
        setUploading(false)
        setTimeout(() => setMessage(''), 5000)

        uploadRef.current.value = ''

        setMedias([...medias, newMedia])

      })
    } else {
      setMessage('Please select a file')
    }

  }

  const onImageChanged = (e) => {
    let file = e.target.files[0]
    setSelectedFile(file)
  }

  const handleSetAsFeatureImage = (e) => {
    const mediaId = e.currentTarget.dataset.id
    const params = {
      sku: sku,
      media: mediaId,
    }
    osServices.osSetAsFeatureImage(params).then(response => {
      setMessageShown(true)
    })

  }

  const handleCloseMessage = () => {
    setMessageShown(false)
  }

  return (
    <>
      <Table>
        <TableBody>
          {medias.map(media =>
            <TableRow key={media.media_id}>
              <TableCell>{media.media_id}</TableCell>
              <TableCell><img src={media.media_thumbnail} width="100" height="100" /></TableCell>
              <TableCell>{media.media_type}</TableCell>
              <TableCell>
                  <Button style={{color: 'white'}} color="error" variant={'contained'} data-id={media.media_id} onClick={handleDeleteMedia}><OsIconRemove /></Button>
                  <Button style={{color: 'white'}} className={'ml-2'} variant={'contained'} data-id={media.media_id} onClick={handleSetAsFeatureImage}>Set as featured image</Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Box class="mt-5 d-flex align-items-center" >
        <input type="file" onChange={onImageChanged} ref={uploadRef} />
        <Button variant={'contained'} onClick={handleSaveClicked}>Upload Images</Button>
        {message && <Alert className={'ml-5'} severity="success">{message}</Alert>}
        {isUploading && <div class="ml-5 d-flex align-items-center"><OsLoading /> <span>Uploading...</span></div>}
      </Box>

      <Snackbar open={isMessageShown} autoHideDuration={6000} onClose={handleCloseMessage}>
        <Alert onClose={handleCloseMessage} severity="success" sx={{ width: '100%' }}>
          Image was set as featured image!
        </Alert>
      </Snackbar>
    </>
  )
}

export default OsAdminProductMediaManage