import img1 from '../img/img1.png'
import { MailOutlined, HeartOutlined, UnorderedListOutlined, HeatMapOutlined } from '@ant-design/icons'

const UserPage = () => {
  const menuItems = [
    { icon: <HeartOutlined />, label: 'My Favourites' },
    { icon: <UnorderedListOutlined />, label: 'Order History' },
    { icon: <HeatMapOutlined />, label: 'Manage Delivery Address' },
    { icon: <HeartOutlined />, label: 'Voucher Vault' },
  ]
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-100 p-5 text-center shadow-md">
        <img src={img1} className="h-20 rounded-full border-2 object-cover" alt="profile" />
        <h1 className="mt-2 font-semibold">Sona Maharjan</h1>
        <p className="flex items-center">
          <MailOutlined className="m-2" />
          sonamaharjan5@gmail.com
        </p>
        <button className="mt-3 rounded-3xl bg-yellow-500 px-6 py-2 text-sm hover:bg-yellow-400">EDIT PROFILE</button>
        <div className="mt-4 w-full">
          {menuItems.map((item, index) => (
            <p key={index} className="flex cursor-pointer items-center gap-2 py-2 text-lg hover:bg-gray-200">
              {item.icon}
              {item.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserPage
