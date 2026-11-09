import type { Post } from '~/content/site'
import { Photo } from './Photo'

/** Card de dica ou receita. O texto completo abre no próprio card (sem página separada). */
export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const more = post.tag === 'Receita' ? 'Ler a receita' : 'Ler a dica'
  return (
    <article className={`post${featured ? ' post--featured' : ''}`}>
      <div className="post-photo">
        <Photo k={post.image} />
      </div>
      <div className="post-text">
        <p className="post-meta">
          <span className={`post-tag post-tag--${post.tag === 'Receita' ? 'recipe' : 'tip'}`}>
            {post.tag}
          </span>
          <span>{post.minutes} min de leitura</span>
        </p>
        <h3>{post.title}</h3>
        <p className="post-excerpt">{post.excerpt}</p>
        <details className="post-more">
          <summary>{more}</summary>
          <div className="post-body">
            {post.list && (
              <>
                <h4>{post.list.title}</h4>
                <ul>
                  {post.list.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </>
            )}
            {post.tag === 'Receita' ? (
              <>
                <h4>Modo de preparo</h4>
                <ol>
                  {post.body.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ol>
              </>
            ) : (
              post.body.map((b) => <p key={b}>{b}</p>)
            )}
          </div>
        </details>
      </div>
    </article>
  )
}
