import React from 'react'

const Day = () => {
    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth()+1;
    const year = now.getFullYear();

   const formattedDate = `${day}/${month}/${year}`;
  return (
    <div>
          {formattedDate}
    </div>
  )
}

export default Day
