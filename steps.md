proxy servers in package.json ----> for the backend and rest apis

npm run build

to push to Amazon S3 bucket:
aws s3 sync /Users/pratik/Documents/my-website/build s3://pratikmathur.com/
aws s3 sync /Users/pratik/Documents/my-website/build s3://www.pratikmathur.com/


npm run build && aws s3 sync /Users/pratik/Documents/my-website/build s3://social.pratikmathur.com


to fix cors,
enable from serverless framework



static/media/[name].[hash:8].[ext]