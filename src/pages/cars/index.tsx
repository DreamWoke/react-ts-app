import React, { useState } from "react"
import { PageHeader, Card } from "antd"

import ProductCard from "Components/ProductCard"
import "./index.scss"

type dataType = {
  id: string
  name: string
  price: number
}
const First = () => {
  const [data, setData] = useState<dataType[]>([
    { id: "1", name: "cars1", price: 200 },
    { id: "2", name: "cars2", price: 100 },
    { id: "3", name: "cars2", price: 100 },
    { id: "4", name: "cars2", price: 100 },
    { id: "5", name: "cars2", price: 100 },
    { id: "6", name: "cars2", price: 100 },
    { id: "7", name: "cars2", price: 100 },
    { id: "8", name: "cars2", price: 100 },
    { id: "9", name: "cars2", price: 100 },
    { id: "10", name: "cars2", price: 100 },
    { id: "11", name: "cars2", price: 100 },
    { id: "12", name: "cars2", price: 100 },
    { id: "13", name: "cars2", price: 100 },
    { id: "14", name: "cars2", price: 100 },
    { id: "15", name: "cars2", price: 100 },
    { id: "16", name: "cars2", price: 100 },
  ])

  return (
    <>
      <PageHeader ghost={false} title="Car" />

      <Card className="card-body">
        <div className="car-card">
          {data.map((item) => {
            return <ProductCard key={item.id} Info={item} />
          })}
        </div>
      </Card>
    </>
  )
}

export default First
