import React from "react";
import { render, userEvent, waitFor } from "@testing-library/react";

import App from "./App";

import { fetchShow as mockFetchShow } from "./api/fetchShow";

//mock fetchShow function
jest.mock("./api/fetchShow");
console.log(mockFetchShow);

const episodesData = {
  data: {
    name: "Chapter One: The Vanishing of Will Byers",
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/132/332034.jpg",
    },
    summary:
      "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest",
    _embedded: {
      episodes: [
        {
          season: 1,
          number: 2,
          airtime: "",
        },
        {
          season: 2,
          number: 3,
          airtime: "",
        },
        {
          season: 3,
          number: 4,
          airtime: "",
        },
      ],
    },
  }, //end of data object
}; //end of episodesData object

//async/await

test("renders episodes data when button is clicked", async () => {
  mockFetchShow.mockResolvedValueOnce(episodesData);
  //render App component
  const { getByText, debug, queryAllByTestId, queryAllByRole } = render(
    <App />
  );
  debug();

  //Userevent click dropdown

  // const button = queryAllByRole(/placeholder/i);


  //await data to be fetched
  await waitFor(() => {
    const button = getByText(/select a season/i);
    userEvent.click(getByText(button));

    expect(mockFetchShow).toHaveBeenCalledTimes(1);
  });

  //dropdown
  const options = queryAllByRole(/option/i);
  expect(options[0]).toHaveTextContent("Season 1");
  expect(options[1]).toHaveTextContent("Season 2");
});
