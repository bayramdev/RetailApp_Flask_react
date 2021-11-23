import React, { useEffect, useState } from 'react';
import {TextField, Rating, Button, Table, TableBody, TableHead, TableRow, TableCell} from '@mui/material'
import {osServices} from '../../controllers/_services/ordersystem.service'
import OsLoading from '../../components/order-system/OsLoading'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string'

const AdminReviewEdit = () => {
  const [review, setReview] = useState({})
  const [isLoading, setLoading] = useState(false)
  const user = useSelector(state => state.user)
  const {search} = useLocation()

  const params = QueryString.parse(search)

  useEffect(() => {
    if (user.med_id) {
      const data = {customer_id: user.customer_id, sku: params.sku}
      setLoading(true)
      osServices.osLoadReview(data).then(response => {
        setReview(response.data)
        setLoading(false)
      })
    }
  }, [user])

  const handleContentChanged = (e) => {
    setReview({...review, content: e.target.value})
  }

  const handleRatingChanged = (e) => {
    setReview({...review, rating: e.target.value})
  }


  const handleSave = (e) => {
    osServices.osUpdateReview(review).then(response => alert('updated'))
  }

  return (
    <>
      <h1 class="mb-5">Review for product <strong>{review.sku} - {review.name}</strong></h1>

      {isLoading && <OsLoading />}
      {!isLoading &&
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Rating</TableCell>
            <TableCell><Rating value={review.rating} onChange={handleRatingChanged} precision={0.5} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Content</TableCell>
            <TableCell><TextField fullWidth={true} multiline={true} rows={5} cols={50} value={review.content} onChange={handleContentChanged}></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell><Button onClick={handleSave} variant="contained">Save</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      }
    </>
  );
};

export default AdminReviewEdit;