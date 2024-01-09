import React from 'react'
import { generatePortalLink } from '../../actions/generatePortalLink'

type Props = {}

const ManageAccountButton = (props: Props) => {
  return (
    <form action={generatePortalLink}>
        <button>Manage Billing</button>
    </form>
  )
}

export default ManageAccountButton