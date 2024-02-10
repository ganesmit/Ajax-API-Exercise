describe("getEpisodesOfShow [mocked]", function () {

  it("should successfully search", async function () {
    const mock = new AxiosMockAdapter(axios);
    mock.onGet(`${TVMAZE_API_URL}shows/1000/episodes`)
      .reply(200, [{ id: 1, name: "A", season: "B", number: 10 }]);

    const episodes = await getEpisodesOfShow(1000);
    expect(episodes).toEqual([{
      id: 1,
      name: "A",
      season: "B",
      number: 10,
    }]);
    mock.restore();
  });
});

describe("search form submission", function () {

  it("should search", async function () {
    spyOn(window, "searchForShowAndDisplay");
    $("#searchForm-term").val("bletchley");
    $searchForm.trigger("submit");
    expect(searchForShowAndDisplay).toHaveBeenCalledTimes(1);
  });
})

