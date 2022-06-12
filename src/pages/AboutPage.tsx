export default function AboutPage() {
  return (
    <div className='prose mx-auto mt-8 mb-4 max-w-3xl px-4 dark:prose-invert '>
      <h1>About</h1>
      <p>
        This website is created by <a href='https://github.com/ramaakbar'>me</a>
        .
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel
        incidunt sequi minus quae nemo eos inventore sint. Dolorem, aliquam?
        Doloremque debitis maxime velit dignissimos quasi cumque eum ratione
        provident.
      </p>
      <h2>Tech Stack that is used</h2>
      <p>Client: React, Zustand, React Query, Typescript, TailwindCSS </p>
      <p>Server: -</p>
      <p></p>
      <h2>Features</h2>

      <ul>
        <li>Todo List</li>
        <li>Subreddit search post</li>
        <li>Dark Mode</li>
      </ul>
      <p>
        Check out the source code{' '}
        <a href='https://github.com/ramaakbar/rts-fnapp'>here</a>
      </p>
    </div>
  );
}
