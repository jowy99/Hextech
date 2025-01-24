export async function onRequest({ request, redirect }) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Verifica si la URL raíz no tiene idioma
  const supportedLanguages = ['es', 'en']; // Idiomas soportados
  const hasLang = supportedLanguages.some((lang) =>
    pathname.startsWith(`/${lang}`)
  );

  // Si no tiene idioma, redirige a /es
  if (!hasLang && pathname === '/') {
    return redirect('/es', 302);
  }

  // Continua con la solicitud normal si tiene idioma
  return new Response(null, { status: 200 });
}