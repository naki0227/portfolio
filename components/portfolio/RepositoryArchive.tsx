"use client";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { categories, type Category, type Repository } from "@/content/archive";
import { filterRepositories } from "@/lib/portfolio-filter";

export function RepositoryArchive({
  repositories,
  date,
}: {
  repositories: Repository[];
  date: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("すべて");
  const [expanded, setExpanded] = useState(false);
  const filtered = useMemo(
    () => filterRepositories(repositories, query, category),
    [repositories, query, category],
  );
  const visible = expanded ? filtered : filtered.slice(0, 12);
  return (
    <div className="archive-browser">
      <div className="archive-toolbar">
        <label htmlFor="repo-search">
          名前・技術・キーワードで検索
          <Input
            id="repo-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setExpanded(false);
            }}
            placeholder="Rust, Swift, 学習…"
            className="archive-search"
          />
        </label>
        <span className="mono">{date} 時点の公開リポジトリ</span>
      </div>
      <Tabs
        value={category}
        onValueChange={(value) => {
          setCategory(value as Category);
          setExpanded(false);
        }}
      >
        <TabsList
          variant="line"
          className="archive-tabs"
          aria-label="リポジトリの分野"
        >
          {categories.map((c) => (
            <TabsTrigger value={c} key={c}>
              {c}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((c) => (
          <TabsContent value={c} key={c}>
            <p className="result-count mono" role="status">
              {filtered.length} REPOSITORIES {query && `/ “${query}”`}
            </p>
            <div className="repo-grid">
              {visible.map((repo) => (
                <a
                  className="repo-row"
                  href={repo.url}
                  key={repo.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <span className="repo-kind">{repo.category}</span>
                    <h3>
                      {repo.name}
                      <span>↗</span>
                    </h3>
                    <p>{repo.description}</p>
                    <span className="repo-tech mono">
                      {repo.tags.join(" / ") || "README / SOURCE"}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            {!filtered.length && (
              <div className="empty-result">
                <p>一致するリポジトリはありません。</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setQuery("");
                    setCategory("すべて");
                  }}
                >
                  検索条件をクリア
                </Button>
              </div>
            )}
            {filtered.length > 12 && (
              <Button
                variant="outline"
                className="archive-expand"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded
                  ? "12件に戻す"
                  : `残り${filtered.length - 12}件も表示する`}
                <span>{expanded ? "−" : "＋"}</span>
              </Button>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
