const post_prefix = '/post';

const Config = {

    timezone: 'Asia/Bangkok'
};
  

export const url = slug => (
    `${post_prefix}/${slug}`
)



export default Config;