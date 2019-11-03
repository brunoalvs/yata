# How to Run

Run `yarn install` to install all dependencies of project - You can also use `npm`.

Commands:

- `yarn dev`
- `yarn build`
- `yarn start`
- `yarn storybook`

## Example: Card Project

```html
<section class='card card-project'>
  <header>
    <h1>project.title / project.name</h1>
    <h2>project.description</h2>
  </header>
  <article>
    <p>
      Project.note
    </p>
    <ul class='list-checkbox'>
      <li class='checkbox item'>
        <input type='checkbox' id='item.name' />
        <label for='item.name'>item.name</label>
      </li>
    </li>
  </article>
</section>

```

## Use Atomic Design

### Arquitetura

```
|- components
  |- atoms
  |  |- input
  |  |- button
  |
  |- molecules
  |  |- logo
  |  |- navbar-menu
  |
  |- organisms
  |  |- header
  |
  |- templates
  |
```

### Links Úteis

- [Table of Contents - Atomic Design by Brad Frost](http://atomicdesign.bradfrost.com/table-of-contents/)
- [Atomic Design: Garantindo a coesão a longo prazo](https://www.organicadigital.com/seeds/atomic-design-garantindo-a-coesao-a-longo-prazo/)
- [Using React within a Design System - Medium](https://medium.com/buildit/using-react-within-a-design-system-73d4bb0cc822)
- [Storybook Addons - Viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport)
