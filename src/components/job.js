import React from "react";
import { FormattedDate, FormattedNumber } from "react-intl";

const Job = ({ offer }) => {
  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>{offer.name}</td>
      <td>{offer.company}</td>
      <td>{offer.salary.toFixed(1)} million</td>
      <td>{offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={offer.views} />
      </td>
    </tr>
  );
};

export default Job;
