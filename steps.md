proxy servers in package.json ----> for the backend and rest apis

npm run build

to push to Amazon S3 bucket:
aws s3 sync /Users/pratik/Documents/social-network-app/build s3://social.pratikmathur.com


npm run build && aws s3 sync /Users/pratik/Documents/social-network-app/build s3://social.pratikmathur.com


to fix cors,
enable from serverless framework



static/media/[name].[hash:8].[ext]