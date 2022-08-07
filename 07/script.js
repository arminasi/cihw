function fetchData(url) {
  const BASE_URL = 'https://ghibliapi.herokuapp.com/'
  const newUrl = url.startsWith('/') ? url.slice(1) : url
  return fetch(`${BASE_URL}${newUrl}`).then((res) => res.json())
}

// fetchData('people').then((data) => console.log(data))
// fetchData('films').then((data) => console.log(data))

init()

function init() {
  const rootEl = document.querySelector('#root')
  const divEl = App()
  rootEl.append(divEl)
}

function App() {
  const container = document.createElement('div')
  container.setAttribute('component-name', 'App')
	container.setAttribute("class", "app")

  const state = {
    people: [],
  }


  function setState(obj) {
    for (let key in obj) {
      state[key] = obj[key]
    }
    render()
  }

  function render() {
    container.innerHTML = ''
    const peopleEl = People(state.people)
    container.append(peopleEl)
  }

  fetchData('people').then((data) => {
    setState({ people: data })
  })



  render()
  return container
}

function People(people) {
  const container = document.createElement('div')
  container.setAttribute('component-name', 'People')
	container.setAttribute("class", "people")

  people.forEach(({ name, age, gender, eye_color, hair_color, id, films}) => {
    const userEl = Person(name, age, gender, eye_color, hair_color, id, films)
    container.append(userEl)
  })

  return container
}

function Person(name, age, gender, eye_color, hair_color, id, films) {
  const container = document.createElement('div');

  const imageContainer = document.createElement("img");
  imageContainer.setAttribute("class", "img");

  container.setAttribute('component-name', 'Person')
  container.classList.add('user')

  const nameEl = document.createElement('div')
  nameEl.classList.add('name')

	const ageElWrap = document.createElement("div")
	ageElWrap.classList.add("ageWrap")

  const ageEl = document.createElement('div')
  ageEl.classList.add('age')
	ageElWrap.append(ageEl)

  const genderEl = document.createElement('div')
  genderEl.classList.add('gender')

	const eye_colorEl = document.createElement("div")
	eye_colorEl.classList.add("eye_color")

	const hair_colorEl = document.createElement("div")
	hair_colorEl.classList.add("hair_color")

	const filmListBtn = document.createElement("button")
	filmListBtn.innerHTML = "film avatar";

  async function filmsFetch(films) {
    const response = await fetch(films);
    const data = response.json();
    return data;
  }

	filmListBtn.addEventListener("click", () => filmsFetch(films).then(data => imageContainer.src = data.image));

  nameEl.innerHTML = name
  ageEl.innerHTML = `${age} yo`
  genderEl.innerHTML = gender
	eye_colorEl.innerHTML = `eye color - ${eye_color}`;
	hair_colorEl.innerHTML = `hair color - ${hair_color}`;

  container.append(nameEl, imageContainer, ageElWrap, genderEl, eye_colorEl, hair_colorEl, filmListBtn)
  return container
}
