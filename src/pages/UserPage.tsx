import img1 from '../img/img1.png'
import { MailOutlined, HeartOutlined, UnorderedListOutlined, HeatMapOutlined } from '@ant-design/icons'

const UserPage = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center bg-slate-100 py-2 text-center">
      <img src={img1} className="center inline-flex h-20 rounded-full border-2 object-cover" alt="profile" />
      <h1 className="font-semibold">Sona Maharjan</h1>
      <p>
        <MailOutlined className="m-2" />
        sonamaharjan5@gmail.com
      </p>
      <button className="rounded-3xl bg-yellow-500 px-6 py-2 text-sm hover:bg-yellow-400">EDIT PROFILE</button>
      <div className="py-4">
        <p className="flex items-center gap-2 font-serif">
          <HeartOutlined />
          My Favourites
        </p>
        <p className="flex items-center gap-2 font-serif">
          <UnorderedListOutlined />
          Order History
        </p>
        <p className="flex items-center gap-2 font-serif">
          <HeatMapOutlined />
          Manage Delivery Address
        </p>
        <p className="flex items-center gap-2 font-serif">
          <HeartOutlined />
          Voucher Vault
        </p>
      </div>
    </div>
  )
}

export default UserPage
