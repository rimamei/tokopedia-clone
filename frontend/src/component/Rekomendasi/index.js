import React, { useState } from "react";
import { Button, Card } from "parts";

const Rekomendasi = (props) => {
  console.log(`Rekomendasi: ${props}`)
  const { data } = props;
  const [limit, setLimit] = useState(6);

  const loadMore = (e) => {
    e.preventDefault();
    setLimit(limit + 6);
  };

  return (
    <section className="flex flex-col">
      <div className="w-full pb-12">
        <div className="mb-5">
          <h1 className="text-3xl font-bold">{props.children}</h1>
        </div>
        <div className="mt-10 grid grid-cols-6 gap-8">
          {data.slice(0, limit).map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
      <div className="self-center">
        <Button
          outerClassName="px-10 py-3 text-xl border-2 border-primary text-primary focus:ring-2 focus:ring-green-500 hover:shadow"
          onClick={loadMore}
        >
          Muat Lebih Banyak
        </Button>
      </div>
    </section>
  );
};

export default Rekomendasi;
