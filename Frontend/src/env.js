let isProd = true;  // if we want to use it on our local machine set it to false

const server = isProd ? "https://video-call-1-e3uv.onrender.com" : "http://localhost:2000";

export default server;