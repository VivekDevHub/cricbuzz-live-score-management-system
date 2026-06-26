module.exports = [
"[project]/src/features/auth/ui/jsx/AuthGuard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const authRoutes = [
    "/login",
    "/signup",
    "/forgot-password"
];
const resetPasswordPattern = /^\/reset-password\//;
const AuthGuard = ({ children })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isAuthenticated, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.auth);
    const isVerified = user?.isVerified;
    const isAuthRoute = authRoutes.includes(pathname) || resetPasswordPattern.test(pathname);
    const isVerifyEmailRoute = pathname === "/verify-email";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isAuthenticated && isVerifyEmailRoute) {
            router.replace("/login");
            return;
        }
        if (isAuthenticated && isVerified && isAuthRoute) {
            router.replace("/");
            return;
        }
        if (isAuthenticated && !isVerified && isAuthRoute) {
            router.replace("/verify-email");
            return;
        }
        if (isAuthenticated && isVerified && isVerifyEmailRoute) {
            router.replace("/");
            return;
        }
    }, [
        isAuthenticated,
        isVerified,
        pathname,
        router,
        isAuthRoute,
        isVerifyEmailRoute
    ]);
    if (!isAuthenticated && isVerifyEmailRoute) return null;
    if (isAuthenticated && isVerified && isAuthRoute) return null;
    if (isAuthenticated && !isVerified && isAuthRoute) return null;
    if (isAuthenticated && isVerified && isVerifyEmailRoute) return null;
    return children;
};
const __TURBOPACK__default__export__ = AuthGuard;
}),
];

//# sourceMappingURL=src_features_auth_ui_jsx_AuthGuard_jsx_117z1im._.js.map