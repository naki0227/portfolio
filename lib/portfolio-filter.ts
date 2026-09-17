import type { Category, Repository } from "@/content/archive";
/** Pure query: the UI owns input state; this function owns matching rules. */
export function filterRepositories(
  repositories: Repository[],
  query: string,
  category: Category,
): Repository[] {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return repositories.filter(
    (repo) =>
      (category === "すべて" || repo.category === category) &&
      terms.every((term) =>
        [repo.name, repo.description, ...repo.tags]
          .join(" ")
          .toLocaleLowerCase()
          .includes(term),
      ),
  );
}
