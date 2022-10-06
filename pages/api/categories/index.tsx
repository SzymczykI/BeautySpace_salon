import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSideProps }  from '../../index'

type ResponseData = {
  categories: []
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    try {
      const result = await getServerSideProps()
      const categories = result.props.categories
      res.status(200).send({ categories })
    } catch (err) {
      res.status(500)
    }
  }