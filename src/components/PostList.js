import React from "react";
import { Link } from "gatsby";
import { DateTime } from "luxon";
import Config, { url } from "../config";

const PostList = ({ posts }) => {
  return (
    <div className="postlist">
      {posts.map(({ node }) => (
        <div className="row postlist-item" key={node.slug}>
          <div className="col-sm postlist-first-column">
            <time className="postlist-date" dateTime="">
              {DateTime.fromISO(node.date, { zone: Config.timezone }).toFormat(
                "yyyy MMM, d"
              )}
            </time>
          </div>
          <div className="col-sm">
            <Link className="postlist-link" to={url(node.slug)}>
              <span
                dangerouslySetInnerHTML={{
                  __html: node.title
                }}
              />
            </Link>
            <div>
              {/* {post.tags.map(tag => (
              <a key={tag.term_id} href="#" className="tag badge badge-light">{tag.name}</a>
            ))} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostList;
