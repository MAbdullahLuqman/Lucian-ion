module.exports = [
"[project]/src/components/cases/CaseFigure.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CaseFigure",
    ()=>CaseFigure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function CaseFigure({ patientCase }) {
    const [viewIndex, setViewIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const view = patientCase.views[viewIndex] ?? patientCase.views[0];
    if (!view) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: "bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-px bg-rule",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: view.before,
                                alt: `${patientCase.procedure}, ${view.label.toLowerCase()}, before surgery`,
                                loading: "lazy",
                                decoding: "async",
                                className: "aspect-[3/4] w-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cases/CaseFigure.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "label absolute left-2 top-2 bg-background/85 px-2 py-1",
                                children: "Before"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cases/CaseFigure.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cases/CaseFigure.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: view.after,
                                alt: `${patientCase.procedure}, ${view.label.toLowerCase()}, after surgery`,
                                loading: "lazy",
                                decoding: "async",
                                className: "aspect-[3/4] w-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cases/CaseFigure.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "label absolute left-2 top-2 bg-background/85 px-2 py-1",
                                children: "After"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cases/CaseFigure.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cases/CaseFigure.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cases/CaseFigure.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                className: "px-1 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-display text-lg leading-snug",
                        children: patientCase.procedure
                    }, void 0, false, {
                        fileName: "[project]/src/components/cases/CaseFigure.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "Surgery by Lucian Ion. Individual result; it is not a guide to what any other person would achieve."
                    }, void 0, false, {
                        fileName: "[project]/src/components/cases/CaseFigure.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    patientCase.views.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap gap-2",
                        role: "group",
                        "aria-label": "Choose a view",
                        children: patientCase.views.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setViewIndex(i),
                                "aria-pressed": i === viewIndex,
                                className: `border px-3 py-1.5 text-xs transition-colors ${i === viewIndex ? "border-foreground bg-foreground text-background" : "border-rule hover:bg-secondary"}`,
                                children: v.label
                            }, v.label + i, false, {
                                fileName: "[project]/src/components/cases/CaseFigure.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cases/CaseFigure.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cases/CaseFigure.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cases/CaseFigure.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/pages/ContentPages.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsultationPage",
    ()=>ConsultationPage,
    "ContactPage",
    ()=>ContactPage,
    "CookiePolicyPage",
    ()=>CookiePolicyPage,
    "HomePage",
    ()=>HomePage,
    "InternalToolReviewPage",
    ()=>InternalToolReviewPage,
    "LucianIonPage",
    ()=>LucianIonPage,
    "PrivacyPolicyPage",
    ()=>PrivacyPolicyPage,
    "SiteMapPage",
    ()=>SiteMapPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/primitives.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$procedures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/procedures.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/images.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function HomePage() {
    const primaryPhone = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practice"].phones[0] ?? "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rule-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-10 pb-14 pt-12 lg:grid-cols-12 lg:gap-12 lg:pb-20 lg:pt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                        children: "Aveling House · 1B Upper Wimpole Street · London"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-6 text-balance text-[2.6rem] leading-[1.03] sm:text-6xl lg:text-[4.4rem]",
                                        children: [
                                            "Lucian Ion ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "FRCS(Plast)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 32,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 font-display text-xl text-muted-foreground sm:text-2xl",
                                        children: "Consultant plastic and cosmetic surgeon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "measure mt-8 text-lg leading-relaxed",
                                        children: "Facial surgery, with a particular focus on primary and secondary rhinoplasty and on rejuvenation of the face and neck. Planning is done with photography and 3D imaging, so a conversation about change can be specific rather than vague."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-9 flex flex-wrap gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                                to: "/contact-us",
                                                children: "Contact the practice"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                                to: "/lucian-ion",
                                                variant: "outline",
                                                children: "About Lucian Ion"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-8 text-sm text-muted-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${primaryPhone.replace(/\s/g, "")}`,
                                            className: "hover:underline",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practice"].phoneInternational
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        "home-slide-2.jpg",
                                        "home-slide-4.jpg",
                                        "home-slide-5.jpg"
                                    ].map((image, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                            className: `${i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[3/4]"} overflow-hidden bg-muted`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["img"])(image),
                                                alt: "Black and white editorial portrait study",
                                                loading: i === 0 ? "eager" : "lazy",
                                                className: "h-full w-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 62,
                                                columnNumber: 21
                                            }, this)
                                        }, image, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "rule-b bg-paper",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                        children: "The practice"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-display text-2xl leading-snug sm:text-[2rem] sm:leading-[1.25]",
                                            children: "Changing how you look is only worth doing if it changes how you feel about yourself. The work of the consultation is to find out whether surgery is the right answer at all."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "measure mt-7 leading-relaxed text-muted-foreground",
                                            children: "Surgery is offered alongside non-surgical options, and sometimes the honest recommendation is to do nothing for now. Where an operation is right, planning uses standard photography and 3D imaging so that the intended change can be described precisely and reviewed afterwards against the same measurements."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-12 lg:py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                            children: "Areas of practice"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-8 grid gap-px bg-rule sm:grid-cols-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$procedures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sections"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "bg-background",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${s.slug}`,
                                        className: "group flex h-full flex-col hover:bg-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative block aspect-[16/10] overflow-hidden bg-muted",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["img"])(s.image),
                                                    alt: s.imageAlt,
                                                    loading: i < 2 ? "eager" : "lazy",
                                                    className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex flex-1 flex-col p-7",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-display text-2xl leading-snug",
                                                        children: s.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "measure mt-3 text-[0.975rem] leading-relaxed text-muted-foreground",
                                                        children: s.standfirst
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "label mt-6",
                                                        children: "View section →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                }, s.slug, false, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "rule-t py-14",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-8 lg:grid-cols-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                    children: "Getting in touch"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-2xl leading-snug",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practice"].addressLines.join(", ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-lg",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practice"].phones.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    i > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 text-muted-foreground",
                                                        children: "/"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 30
                                                    }, this) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `tel:${p.replace(/\s/g, "")}`,
                                                        className: "hover:underline",
                                                        children: p
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, p, true, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-7",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                            to: "/contact-us",
                                            variant: "outline",
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/ContentPages.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function ConsultationPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crumbs"], {
                items: [
                    {
                        label: "Home",
                        to: "/"
                    },
                    {
                        label: "Consultation"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHero"], {
                eyebrow: "Before anything is decided",
                title: "The consultation",
                standfirst: "You will have many questions before deciding anything, and you will want to meet the surgeon. Trust matters here more than in almost any other transaction.",
                image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["img"])("rejuvenation-09.jpg"),
                imageAlt: "Black and white portrait study in natural light"
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionBlock"], {
                        index: "01",
                        title: "What it is for",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Prose"], {
                            paragraphs: [
                                "A consultation is an assessment, not a sales appointment. Its purpose is to work out what is actually bothering you, whether an operation would address it, and whether this is the right time.",
                                "Sometimes the answer is that surgery is not the right route, or not yet. That is a legitimate outcome of a consultation rather than a failure of one."
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionBlock"], {
                        index: "02",
                        title: "What happens",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuledList"], {
                            items: [
                                "You describe what you have noticed and what you would like to be different, in your own words.",
                                "Relevant medical history, medication, previous surgery and general health are discussed.",
                                "An examination of the area concerned, including function where that is relevant.",
                                "Standard photographs, and 3D imaging where it is useful, so the plan can be described in specific terms.",
                                "A discussion of what is achievable, what is not, and which alternatives are worth considering.",
                                "Risks and recovery, and the chance to ask everything you came with."
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionBlock"], {
                        index: "03",
                        title: "What to bring",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuledList"], {
                                items: [
                                    "A written list of your own questions.",
                                    "A list of medication, supplements and allergies.",
                                    "Details of previous surgery, and operation notes or pre-operative photographs if you have them.",
                                    "Photographs of results you like, and of results you dislike.",
                                    "Anyone you would like with you."
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-7 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                        to: "/tools/consultation-questions",
                                        children: "Build your question list"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                        to: "/tools/consultation-planner",
                                        variant: "outline",
                                        children: "Consultation preparation planner"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionBlock"], {
                        index: "04",
                        title: "Deciding",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Prose"], {
                            paragraphs: [
                                "There is no advantage to deciding quickly. Time between a consultation and a decision is part of the process.",
                                "If you feel rushed by anyone at any clinic, that is information worth acting on."
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rule-t py-10 lg:py-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                children: "Awaiting approval"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid gap-3 lg:max-w-3xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmNote"], {
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"],
                                        " consultation fee, length of appointment, remote consultation policy and cooling-off period."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/ContentPages.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
function ContactPage() {
    const [selectedDay, setSelectedDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(17);
    const [selectedTime, setSelectedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Afternoon");
    const [prepared, setPrepared] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const days = [
        30,
        31,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        1,
        2,
        3
    ];
    const preferenceSlots = [
        "Morning",
        "Lunch time",
        "Afternoon",
        "After work",
        "No preference"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crumbs"], {
                items: [
                    {
                        label: "Home",
                        to: "/"
                    },
                    {
                        label: "Contact"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rule-b bg-paper py-10 lg:py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                    width: "wide",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden rounded-[1.75rem] bg-background shadow-sm ring-1 ring-rule",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-0 lg:grid-cols-[1.05fr_0.95fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-10 text-center sm:px-10 lg:px-14 lg:py-14",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl leading-tight sm:text-5xl",
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
                                            children: "Ask about arranging a consultation with Lucian Ion at Aveling House. Nothing here commits you to surgery."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto mt-14 max-w-2xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-8 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            "aria-label": "Previous month",
                                                            className: "text-4xl leading-none",
                                                            children: "‹"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "font-sans text-2xl font-semibold",
                                                            children: "Preferred day"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            "aria-label": "Next month",
                                                            className: "text-4xl leading-none",
                                                            children: "›"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-7 gap-y-7 text-center text-lg",
                                                    children: [
                                                        [
                                                            "Su",
                                                            "Mo",
                                                            "Tu",
                                                            "We",
                                                            "Th",
                                                            "Fr",
                                                            "Sa"
                                                        ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-muted-foreground",
                                                                children: day
                                                            }, day, false, {
                                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 23
                                                            }, this)),
                                                        days.map((day, i)=>{
                                                            const muted = i < 2 || i > 31;
                                                            const active = day === selectedDay && !muted;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>!muted && setSelectedDay(day),
                                                                className: `mx-auto flex h-11 w-11 items-center justify-center rounded-xl text-lg ${active ? "bg-[#214b3f] text-white" : muted ? "text-muted-foreground/55" : "hover:bg-secondary"}`,
                                                                children: day
                                                            }, `${day}-${i}`, false, {
                                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 25
                                                            }, this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-rule px-6 py-10 sm:px-10 lg:border-l lg:border-t-0 lg:px-14 lg:py-14",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-center text-4xl leading-tight sm:text-5xl",
                                            children: "Request a consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 304,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6 text-center text-lg",
                                            children: "What time works best?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-center text-sm text-muted-foreground",
                                            children: "London, UK"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10 grid max-h-[19rem] gap-4 overflow-y-auto pr-2",
                                            children: preferenceSlots.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setSelectedTime(slot),
                                                    className: `rounded-md border px-5 py-4 text-lg transition-colors ${selectedTime === slot ? "border-[#214b3f] bg-[#214b3f] text-white" : "border-rule bg-background hover:bg-secondary"}`,
                                                    children: slot
                                                }, slot, false, {
                                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 309,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "mt-9 grid gap-4",
                                            onSubmit: (event)=>{
                                                event.preventDefault();
                                                setPrepared(true);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "grid gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "label",
                                                            children: "Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "rounded-md border border-rule bg-background px-4 py-3",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "grid gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "label",
                                                            children: "Telephone or email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "rounded-md border border-rule bg-background px-4 py-3",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "grid gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "label",
                                                            children: "What would you like to discuss?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            className: "min-h-28 rounded-md border border-rule bg-background px-4 py-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "rounded-md bg-[#214b3f] px-5 py-4 text-sm font-medium text-white hover:bg-[#18382f]",
                                                    children: "Prepare enquiry"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 19
                                                }, this),
                                                prepared ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm leading-relaxed text-muted-foreground",
                                                    "aria-live": "polite",
                                                    children: "Your enquiry notes are ready in this browser. The practice contact details are below; online sending needs the practice email or form endpoint to be confirmed."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 21
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 326,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionBlock"], {
                        index: "01",
                        title: "What to expect",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Prose"], {
                                paragraphs: [
                                    "When someone enquires, the first step is a practical conversation with the practice. You can ask what a consultation involves, what information to bring and whether your concern is something Lucian assesses.",
                                    "A consultation is an assessment, not a commitment to surgery. It is also a place to ask what surgery would not change, what alternatives exist and whether doing nothing for now is reasonable."
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-7 grid gap-3 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/tools/consultation-questions",
                                        className: "border border-rule p-5 hover:bg-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-xl",
                                                children: "Prepare questions for your consultation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-2 block text-sm leading-relaxed text-muted-foreground",
                                                children: "Choose questions and print a personal list. No email address required."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/tools/consultation-planner",
                                        className: "border border-rule p-5 hover:bg-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-xl",
                                                children: "Consultation preparation checklist"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 393,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-2 block text-sm leading-relaxed text-muted-foreground",
                                                children: "Work through what to bring and what to think about before you call."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 394,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionBlock"], {
                        index: "02",
                        title: "Where we are",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                className: "not-italic",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display text-2xl leading-snug",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practice"].addressLines.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block",
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 text-lg",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practice"].phones.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            i > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 text-muted-foreground",
                                                children: "/"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 414,
                                                columnNumber: 26
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${p.replace(/\s/g, "")}`,
                                                className: "underline underline-offset-4",
                                                children: p
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                                lineNumber: 415,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, p, true, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 413,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practice"].mapsUrl,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-primary underline underline-offset-4",
                                    children: "Open in Google Maps"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 421,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 max-w-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmNote"], {
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"],
                                        " the practice email address or secure enquiry form endpoint. It has not been guessed here."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionBlock"], {
                        index: "03",
                        title: "Regulated practice",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "measure text-[1.0625rem] leading-relaxed text-foreground/85",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practice"].company
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 439,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/ContentPages.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
function LucianIonPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crumbs"], {
                items: [
                    {
                        label: "Home",
                        to: "/"
                    },
                    {
                        label: "Lucian Ion"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHero"], {
                eyebrow: "The surgeon",
                title: "Lucian Ion FRCS(Plast)",
                standfirst: "Consultant plastic and cosmetic surgeon, practising at Aveling House, Upper Wimpole Street, London.",
                image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["img"])("home-slide-3.jpg"),
                imageAlt: "Black and white editorial portrait photographed in natural light"
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionBlock"], {
                        index: "01",
                        title: "Training and practice",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Prose"], {
                            paragraphs: [
                                "Lucian Ion gained his specialist degree through training in plastic surgery at central London teaching hospitals, and worked at the Chelsea and Westminster Hospital alongside private practice.",
                                "Since 2012 he has worked entirely in private practice, based at Aveling House on Upper Wimpole Street."
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionBlock"], {
                        index: "02",
                        title: "Rhinoplasty and technology",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Prose"], {
                                paragraphs: [
                                    "Much of the practice is nose surgery, both first operations and revision work.",
                                    "As president of the British Society of Rhinoplasty Surgeons he established a training course in technology-assisted rhinoplasty for other surgeons."
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmNote"], {
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"],
                                        " current status of the British Society of Rhinoplasty Surgeons presidency."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionBlock"], {
                        index: "03",
                        title: "How he works",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Prose"], {
                                paragraphs: [
                                    "At the centre of the practice is fitting the treatment to what the patient actually wants, keeping them safe, and aiming for results that last and sit naturally with the rest of their features.",
                                    "In practice that means saying when an operation is not the right answer, and being clear about what any operation will leave unchanged."
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 482,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["img"])("li-signature.png"),
                                alt: "Signature of Lucian Ion",
                                className: "mt-8 h-14 w-auto dark:invert",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 481,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/ContentPages.tsx",
        lineNumber: 450,
        columnNumber: 5
    }, this);
}
function PrivacyPolicyPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LegalPage, {
        title: "Privacy policy",
        standfirst: "How personal information is handled by the practice and by this website.",
        note: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} This page is a structural placeholder. The practice's approved privacy notice must be supplied before launch.`,
        sections: [
            [
                "What this site collects today",
                "This website has no account system and no newsletter sign-up. The preparation pages run entirely in your browser."
            ],
            [
                "Who the controller is",
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practice"].company
            ],
            [
                "Patient photographs",
                "Photographs of patients are published only where written consent for publication on this website has been confirmed."
            ],
            [
                "Your rights",
                "Under UK data protection law you have rights over the personal information an organisation holds about you."
            ]
        ]
    }, void 0, false, {
        fileName: "[project]/src/components/pages/ContentPages.tsx",
        lineNumber: 502,
        columnNumber: 5
    }, this);
}
function CookiePolicyPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LegalPage, {
        title: "Cookie policy",
        standfirst: "What this website stores on your device, and what it does not.",
        sections: [
            [
                "As the site is built today",
                "This site sets no advertising cookies, no analytics cookies and no third-party tracking."
            ],
            [
                "Preparation pages",
                "The preparation pages keep your answers in your browser while you use the page, so you can print your list."
            ],
            [
                "If analytics are added later",
                `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} a consent banner and updated cookie list are required before analytics go live.`
            ]
        ]
    }, void 0, false, {
        fileName: "[project]/src/components/pages/ContentPages.tsx",
        lineNumber: 527,
        columnNumber: 5
    }, this);
}
function LegalPage({ title, standfirst, note, sections: items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crumbs"], {
                items: [
                    {
                        label: "Home",
                        to: "/"
                    },
                    {
                        label: title
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 561,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHero"], {
                eyebrow: "Legal",
                title: title,
                standfirst: standfirst
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 562,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pb-6 pt-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmNote"], {
                            children: note
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 566,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 565,
                        columnNumber: 11
                    }, this) : null,
                    items.map(([heading, body], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionBlock"], {
                            index: String(i + 1).padStart(2, "0"),
                            title: heading,
                            children: body.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmNote"], {
                                children: body
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 572,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Prose"], {
                                paragraphs: [
                                    body
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 574,
                                columnNumber: 15
                            }, this)
                        }, heading, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 570,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 563,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/ContentPages.tsx",
        lineNumber: 560,
        columnNumber: 5
    }, this);
}
const preparationPages = [
    {
        label: "Patient case explorer",
        to: "/tools/patient-cases"
    },
    {
        label: "Consultation question builder",
        to: "/tools/consultation-questions"
    },
    {
        label: "Rhinoplasty comparison",
        to: "/tools/rhinoplasty-comparison"
    },
    {
        label: "Consultation preparation planner",
        to: "/tools/consultation-planner"
    },
    {
        label: "Recovery planning checklist",
        to: "/tools/recovery-checklist"
    }
];
function Column({ title, items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "label",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 594,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "rule-t mt-4",
                children: items.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rule-b",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: i.to,
                            className: "block py-3 text-[1.0625rem] hover:underline",
                            children: i.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 598,
                            columnNumber: 13
                        }, this)
                    }, i.to, false, {
                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                        lineNumber: 597,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 595,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/ContentPages.tsx",
        lineNumber: 593,
        columnNumber: 5
    }, this);
}
function SiteMapPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crumbs"], {
                items: [
                    {
                        label: "Home",
                        to: "/"
                    },
                    {
                        label: "Site map"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 611,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHero"], {
                eyebrow: "Index",
                title: "Site map",
                standfirst: "Every page on this site, in one list."
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Column, {
                            title: "Main",
                            items: [
                                {
                                    label: "Home",
                                    to: "/"
                                },
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utilityNav"]
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 619,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Column, {
                                title: section.label,
                                items: [
                                    {
                                        label: `${section.label} overview`,
                                        to: section.to
                                    },
                                    ...section.children
                                ]
                            }, section.to, false, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 621,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Column, {
                            title: "Preparation",
                            items: preparationPages
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 627,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Column, {
                            title: "Legal",
                            items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["legalNav"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 628,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                    lineNumber: 618,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ContentPages.tsx",
                lineNumber: 617,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/ContentPages.tsx",
        lineNumber: 610,
        columnNumber: 5
    }, this);
}
function InternalToolReviewPage() {
    const rows = [
        [
            "Patient case explorer",
            "Filter approved cases",
            "Consent confirmation and image audit"
        ],
        [
            "Question builder",
            "Printable personal question list",
            "Clinical wording sign-off"
        ],
        [
            "Rhinoplasty comparison",
            "Compare nose surgery categories",
            "Surgeon review of wording"
        ],
        [
            "Consultation planner",
            "Prepare notes and documents",
            "Practice policy details"
        ],
        [
            "Recovery checklist",
            "Discuss home arrangements",
            "Procedure-specific aftercare policy"
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                    children: "Internal"
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                    lineNumber: 646,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-4 text-4xl",
                    children: "Tool review"
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                    lineNumber: 647,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "mt-8 w-full border-collapse text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "rule-b",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 pr-4 label",
                                        children: "Tool"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 651,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 pr-4 label",
                                        children: "Purpose"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 652,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 pr-4 label",
                                        children: "Approval need"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ContentPages.tsx",
                                        lineNumber: 653,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/ContentPages.tsx",
                                lineNumber: 650,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 649,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: rows.map(([tool, purpose, approval])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "rule-b",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 pr-4",
                                            children: tool
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 659,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 pr-4 text-muted-foreground",
                                            children: purpose
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 660,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 pr-4 text-muted-foreground",
                                            children: approval
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                                            lineNumber: 661,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, tool, true, {
                                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                                    lineNumber: 658,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ContentPages.tsx",
                            lineNumber: 656,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/ContentPages.tsx",
                    lineNumber: 648,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/ContentPages.tsx",
            lineNumber: 645,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/ContentPages.tsx",
        lineNumber: 644,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/pages/ToolPages.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsultationPlannerPage",
    ()=>ConsultationPlannerPage,
    "ConsultationQuestionsPage",
    ()=>ConsultationQuestionsPage,
    "PatientCasesPage",
    ()=>PatientCasesPage,
    "RecoveryChecklistPage",
    ()=>RecoveryChecklistPage,
    "RhinoplastyComparisonPage",
    ()=>RhinoplastyComparisonPage,
    "ToolsIndexPage",
    ()=>ToolsIndexPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cases$2f$CaseFigure$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cases/CaseFigure.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/primitives.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tools$2f$ToolShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tools/ToolShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$cases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/cases.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/images.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const preparationLinks = [
    {
        to: "/tools/patient-cases",
        name: "Patient case explorer",
        blurb: "Browse published before and after cases by area and procedure. Only cases with confirmed written consent appear."
    },
    {
        to: "/tools/consultation-questions",
        name: "Consultation question builder",
        blurb: "Choose from a library of questions, add your own, and print a list."
    },
    {
        to: "/tools/rhinoplasty-comparison",
        name: "Rhinoplasty comparison",
        blurb: "Compare the five categories of nose surgery side by side."
    },
    {
        to: "/tools/consultation-planner",
        name: "Consultation preparation planner",
        blurb: "Work through practical preparation before an appointment."
    },
    {
        to: "/tools/recovery-checklist",
        name: "Recovery planning checklist",
        blurb: "Questions and arrangements to settle before a date is agreed. No dates are predicted."
    }
];
function ToolsIndexPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crumbs"], {
                items: [
                    {
                        label: "Home",
                        to: "/"
                    },
                    {
                        label: "Preparation"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ToolPages.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHero"], {
                eyebrow: "Free to use",
                title: "Planning pages",
                standfirst: "Five preparation pages for questions, comparisons and checklists. No email address, nothing stored, and nothing here suggests a diagnosis or recommends a procedure."
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ToolPages.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid gap-px bg-rule sm:grid-cols-2",
                        children: preparationLinks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "bg-background",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: t.to,
                                    className: "flex h-full flex-col p-7 hover:bg-secondary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-display text-2xl leading-snug",
                                            children: t.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "measure mt-3 text-[0.975rem] leading-relaxed text-muted-foreground",
                                            children: t.blurb
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "label mt-6",
                                            children: "Open →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this)
                            }, t.to, false, {
                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rule-t py-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                children: "How these work"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "measure mt-5 leading-relaxed text-muted-foreground",
                                children: "Everything runs in your browser. Your answers are not sent anywhere, are not seen by the practice and are gone when you close the tab."
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/ToolPages.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/ToolPages.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function PatientCasesPage({ toolsCrumb = false }) {
    const approved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$cases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patientCases"].filter((c)=>c.consent === "confirmed"), []);
    const withheld = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$cases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patientCases"].length - approved.length;
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            "All areas",
            ...Array.from(new Set(approved.map((c)=>c.category)))
        ], [
        approved
    ]);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All areas");
    const procedures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const pool = category === "All areas" ? approved : approved.filter((c)=>c.category === category);
        return [
            "All procedures",
            ...Array.from(new Set(pool.map((c)=>c.procedure)))
        ];
    }, [
        approved,
        category
    ]);
    const [procedure, setProcedure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All procedures");
    const visible = approved.filter((c)=>(category === "All areas" || c.category === category) && (procedure === "All procedures" || c.procedure === procedure));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crumbs"], {
                items: toolsCrumb ? [
                    {
                        label: "Home",
                        to: "/"
                    },
                    {
                        label: "Patient cases"
                    }
                ] : [
                    {
                        label: "Home",
                        to: "/"
                    },
                    {
                        label: "Patient cases"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ToolPages.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHero"], {
                eyebrow: "Case explorer",
                title: "Patient cases",
                standfirst: "Photographs of real patients, published only where that patient's written consent for use on this website has been confirmed.",
                image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["img"])("nose-06.jpg"),
                imageAlt: "Black and white profile study"
            }, void 0, false, {
                fileName: "[project]/src/components/pages/ToolPages.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rule-b py-6",
                        id: "case-explorer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                children: "Explore patient cases"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 sm:flex-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "label",
                                                        children: "Area"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: category,
                                                        onChange: (e)=>{
                                                            setCategory(e.target.value);
                                                            setProcedure("All procedures");
                                                        },
                                                        className: "min-w-52 border border-rule bg-background px-3 py-2 text-sm",
                                                        children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: c
                                                            }, c, false, {
                                                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "label",
                                                        children: "Procedure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: procedure,
                                                        onChange: (e)=>setProcedure(e.target.value),
                                                        className: "min-w-52 border border-rule bg-background px-3 py-2 text-sm",
                                                        children: procedures.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: p
                                                            }, p, false, {
                                                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "aria-live": "polite",
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            visible.length,
                                            " published ",
                                            visible.length === 1 ? "case" : "cases"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    visible.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
                            children: visible.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cases$2f$CaseFigure$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CaseFigure"], {
                                    patientCase: c
                                }, c.id, false, {
                                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-14",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "measure",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-2xl leading-snug",
                                    children: approved.length === 0 ? "No cases are published on this site yet." : "No published cases match that filter yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 leading-relaxed text-muted-foreground",
                                    children: [
                                        "The practice archive holds ",
                                        withheld,
                                        " further ",
                                        withheld === 1 ? "case" : "cases",
                                        " ",
                                        "that are not shown. A case appears here only once written consent has been confirmed."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-6 grid gap-px bg-rule",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["externalGalleries"].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "bg-background",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: g.href,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "block px-4 py-4 text-sm hover:bg-secondary",
                                                children: [
                                                    g.label,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: "— external"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this)
                                        }, g.href, false, {
                                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/ToolPages.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/ToolPages.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
const questionLibrary = [
    [
        "About the surgeon",
        "How often do you perform this operation?",
        "Are you on the GMC specialist register for plastic surgery?",
        "Who will actually perform my operation?"
    ],
    [
        "About my case",
        "Am I a good candidate for this operation, and what makes you say so?",
        "What would this change, and what would it leave unchanged?",
        "Is there anything about my anatomy that makes this harder than usual?"
    ],
    [
        "Risks",
        "Which complications are most likely in my case?",
        "What is the most serious thing that could go wrong?",
        "What would happen if I needed urgent care afterwards?"
    ],
    [
        "Recovery",
        "What should I arrange at home before the operation?",
        "When would I be seen again, and how often?",
        "Who do I contact out of hours?"
    ],
    [
        "Practical matters",
        "What is the total cost, and what does it include?",
        "What happens financially if a revision is needed?",
        "Where would the operation take place?"
    ]
];
function ConsultationQuestionsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChecklistTool, {
        title: "Consultation question builder",
        standfirst: "Tick the questions you want answered, add any of your own, then print the list and take it with you. Nothing is sent anywhere.",
        groups: questionLibrary,
        ownLabel: "Your own questions",
        ownPlaceholder: "Type a question and press Enter",
        printLabel: "Print your list",
        empty: "Nothing chosen yet. Tick a question on the left, or write your own."
    }, void 0, false, {
        fileName: "[project]/src/components/pages/ToolPages.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
function ConsultationPlannerPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChecklistTool, {
        title: "Consultation preparation planner",
        standfirst: "Work through the practical things worth preparing before an appointment. It is a checklist, not medical advice.",
        groups: [
            [
                "Before booking",
                "Write down what bothers you in your own words.",
                "List any previous procedures, injuries or treatments.",
                "Gather medication, supplement and allergy details."
            ],
            [
                "What to bring",
                "Bring photographs of results you like and dislike.",
                "Bring operation notes or old photographs if you have had surgery before.",
                "Bring someone with you if that would help you listen and decide."
            ],
            [
                "What to ask",
                "Ask what surgery would change and what it would leave unchanged.",
                "Ask which alternatives are reasonable, including doing nothing for now.",
                "Ask what follow-up involves and who to contact if worried."
            ],
            [
                "After the appointment",
                "Leave time to think before deciding.",
                "Write down anything you did not understand.",
                "Book a second conversation if important questions remain."
            ]
        ],
        ownLabel: "Notes for my consultation",
        ownPlaceholder: "Add a note and press Enter",
        printLabel: "Print planner",
        empty: "Nothing selected yet. Tick anything useful or add your own note."
    }, void 0, false, {
        fileName: "[project]/src/components/pages/ToolPages.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
function RecoveryChecklistPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChecklistTool, {
        title: "Recovery planning checklist",
        standfirst: "Questions and arrangements to settle with Lucian before a date is agreed. This page does not predict recovery times.",
        groups: [
            [
                "Home",
                "Who will take me home after surgery?",
                "Who will stay with me at first?",
                "What should I prepare at home before the operation?"
            ],
            [
                "Work and responsibilities",
                "What should I tell work before committing to a date?",
                "What childcare, caring duties or pet care do I need to arrange?",
                "When should I avoid driving, heavy lifting or exercise?"
            ],
            [
                "Follow-up",
                "When will I be seen again?",
                "Will dressings or sutures need changing?",
                "Who do I contact out of hours if I am worried?"
            ],
            [
                "Warning signs",
                "What is normal swelling, bruising or discomfort?",
                "Which symptoms should prompt an urgent call?",
                "Which medicines or supplements should I stop or avoid?"
            ]
        ],
        ownLabel: "Personal arrangements",
        ownPlaceholder: "Add an arrangement or question and press Enter",
        printLabel: "Print checklist",
        empty: "Nothing selected yet. Tick arrangements to discuss or add your own."
    }, void 0, false, {
        fileName: "[project]/src/components/pages/ToolPages.tsx",
        lineNumber: 283,
        columnNumber: 5
    }, this);
}
function ChecklistTool({ title, standfirst, groups, ownLabel, ownPlaceholder, printLabel, empty }) {
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [own, setOwn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const toggle = (item)=>setSelected((prev)=>{
            const next = new Set(prev);
            if (next.has(item)) next.delete(item);
            else next.add(item);
            return next;
        });
    const addOwn = ()=>{
        const value = draft.trim();
        if (!value) return;
        setOwn((prev)=>[
                ...prev,
                value
            ]);
        setDraft("");
    };
    const items = [
        ...selected,
        ...own
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tools$2f$ToolShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToolShell"], {
        title: title,
        standfirst: standfirst,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-12 py-10 lg:grid-cols-12 lg:gap-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "no-print lg:col-span-7",
                    children: [
                        groups.map(([topic, ...checks])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                className: "rule-t mt-6 pt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                        className: "font-display text-xl",
                                        children: topic
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-3",
                                        children: checks.map((check)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex cursor-pointer items-start gap-3 py-2.5 text-[1.0625rem] leading-snug",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selected.has(check),
                                                            onChange: ()=>toggle(check),
                                                            className: "mt-1.5 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: check
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 21
                                                }, this)
                                            }, check, false, {
                                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                lineNumber: 366,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, topic, true, {
                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rule-t mt-8 pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-xl",
                                    children: ownLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-col gap-3 sm:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: draft,
                                            onChange: (e)=>setDraft(e.target.value),
                                            onKeyDown: (e)=>{
                                                if (e.key === "Enter") {
                                                    e.preventDefault();
                                                    addOwn();
                                                }
                                            },
                                            placeholder: ownPlaceholder,
                                            className: "w-full border border-rule bg-background px-4 py-3 text-[1rem]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: addOwn,
                                            className: "border border-rule px-5 py-3 text-sm hover:bg-secondary",
                                            children: "Add"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:sticky lg:top-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rule-t rule-b py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                        children: "Your list"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                        lineNumber: 411,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 font-display text-2xl",
                                        children: [
                                            items.length,
                                            " ",
                                            items.length === 1 ? "item" : "items"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this),
                            items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "py-6 text-muted-foreground",
                                children: empty
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                lineNumber: 417,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "py-6",
                                children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "rule-b py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "label mr-2",
                                                children: String(i + 1).padStart(2, "0")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                lineNumber: 422,
                                                columnNumber: 21
                                            }, this),
                                            item
                                        ]
                                    }, `${item}-${i}`, true, {
                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                        lineNumber: 421,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                lineNumber: 419,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-print flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tools$2f$ToolShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrintButton"], {
                                        label: printLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this),
                                    items.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setSelected(new Set());
                                            setOwn([]);
                                        },
                                        className: "border border-rule px-5 py-3 text-sm hover:bg-secondary",
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                        lineNumber: 431,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                lineNumber: 428,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-print mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tools$2f$ToolShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToolNote"], {
                                    children: "This page does not assess you and does not suggest a procedure. Your answers stay in this browser tab and are gone when you close it."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                        lineNumber: 409,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                    lineNumber: 408,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/ToolPages.tsx",
            lineNumber: 359,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/ToolPages.tsx",
        lineNumber: 358,
        columnNumber: 5
    }, this);
}
const rhinoplastyRows = [
    [
        "Reduction",
        "/rhinoplasty/reduction",
        "A nose that reads as too projecting, too long, too wide, or with a profile hump.",
        "Reduces size while rebuilding support."
    ],
    [
        "Augmentation",
        "/rhinoplasty/augmentation",
        "A flat bridge or under-projected tip.",
        "Adds structure and height."
    ],
    [
        "Deviated / crooked",
        "/rhinoplasty/deviated-crooked",
        "A nose off the midline, often with blocked breathing.",
        "Releases and re-supports the framework."
    ],
    [
        "Secondary",
        "/rhinoplasty/secondary",
        "Unsatisfactory shape or breathing after previous nose surgery.",
        "Restores missing support before refining shape."
    ],
    [
        "Ultrasonic",
        "/rhinoplasty/ultrasonic",
        "Work on the nasal bones.",
        "A precise bone-shaping technique used within rhinoplasty."
    ]
];
function RhinoplastyComparisonPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tools$2f$ToolShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToolShell"], {
        title: "Rhinoplasty comparison",
        standfirst: "The five categories of nose surgery set out side by side. They overlap, and most operations draw on more than one.",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-[52rem] border-collapse text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "rule-b py-4 pr-6 label",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "rule-b py-4 pr-6 label",
                                        children: "What it addresses"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                        lineNumber: 500,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "rule-b py-4 pr-6 label",
                                        children: "Worth knowing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/ToolPages.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                lineNumber: 498,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                            lineNumber: 497,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: rhinoplastyRows.map(([name, href, addresses, nature])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "rule-b py-5 pr-6 align-top",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: href,
                                                className: "font-display text-xl hover:underline",
                                                children: name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/ToolPages.tsx",
                                                lineNumber: 508,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                                            lineNumber: 507,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "rule-b py-5 pr-6 align-top",
                                            children: addresses
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                                            lineNumber: 512,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "rule-b py-5 pr-6 align-top",
                                            children: nature
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                                            lineNumber: 513,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, href, true, {
                                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                                    lineNumber: 506,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                            lineNumber: 504,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                    lineNumber: 496,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "no-print mt-8 flex flex-wrap gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonLink"], {
                            to: "/rhinoplasty",
                            children: "Rhinoplasty overview"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                            lineNumber: 519,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonLink"], {
                            to: "/tools/consultation-questions",
                            variant: "outline",
                            children: "Prepare questions for your consultation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/ToolPages.tsx",
                            lineNumber: 520,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/ToolPages.tsx",
                    lineNumber: 518,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/ToolPages.tsx",
            lineNumber: 495,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/ToolPages.tsx",
        lineNumber: 491,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/tools/ToolShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrintButton",
    ()=>PrintButton,
    "ToolNote",
    ()=>ToolNote,
    "ToolShell",
    ()=>ToolShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/primitives.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function ToolShell({ title, standfirst, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crumbs"], {
                        items: [
                            {
                                label: "Home",
                                to: "/"
                            },
                            {
                                label: title
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/ToolShell.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHero"], {
                        eyebrow: "Free to use",
                        title: title,
                        standfirst: standfirst
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/ToolShell.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tools/ToolShell.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/tools/ToolShell.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tools/ToolShell.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
function PrintButton({ label = "Print your list" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>window.print(),
        className: "no-print inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/tools/ToolShell.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function ToolNote({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "measure text-sm leading-relaxed text-muted-foreground",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/tools/ToolShell.tsx",
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/content/cases.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// AUTO-GENERATED from the gallery folders published on lucianion.co.uk.
// Source root: https://lucianion.co.uk/assets/img/New_gallery_mirror_area/
// "consent" is derived from the practice's own folder naming:
//   IG_OK   -> confirmed   (patient agreed to public use)
//   NO_IG   -> restricted  (patient did not agree to public use)
//   neither -> unconfirmed ([LUCIAN TO CONFIRM])
// Only cases with consent === "confirmed" are ever rendered.
__turbopack_context__.s([
    "approvedCases",
    ()=>approvedCases,
    "patientCases",
    ()=>patientCases
]);
const patientCases = [
    {
        id: "case-001",
        procedureSlug: "rhinoplasty/reduction",
        category: "Rhinoplasty",
        procedure: "Reduction rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty/Front_view_pre-op_007_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty/Front_view_post-op_007_DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty/Left_profile_pre-op_007_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty/Left_profile_post-op_007_DxO.jpg"
            },
            {
                label: "Right semi-profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty/Right_semi-profile_pre-op_007_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty/Right_semi-profile_post-op_007_DxO.jpg"
            }
        ]
    },
    {
        id: "case-002",
        procedureSlug: "rhinoplasty/reduction",
        category: "Rhinoplasty",
        procedure: "Reduction rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/01-_Reduction/Patient_011-_Reduction_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_011-_Reduction_rhinoplasty/Front_view_pre-op_011_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_011-_Reduction_rhinoplasty/Front_view_post-op_011_DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_011-_Reduction_rhinoplasty/Left_profile_pre-op_011_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_011-_Reduction_rhinoplasty/Left_profile__Post-op_011_DxO.jpg"
            }
        ]
    },
    {
        id: "case-003",
        procedureSlug: "rhinoplasty/reduction",
        category: "Rhinoplasty",
        procedure: "Reduction rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/01-_Reduction/Patient_018_square",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_018_square/018_front_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_018_square/018_front_post.png"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_018_square/018_left_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_018_square/018_left_post.png"
            }
        ]
    },
    {
        id: "case-004",
        procedureSlug: "rhinoplasty/reduction",
        category: "Rhinoplasty",
        procedure: "Reduction rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/01-_Reduction/Patient_024_Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_024_Primary_rhinoplasty/Front_view_preop__024_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_024_Primary_rhinoplasty/Front_view__Postop__024_DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_024_Primary_rhinoplasty/Left_profile_pre-op__024_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_024_Primary_rhinoplasty/Left_profile_Post_op_024_DxO.jpg"
            }
        ]
    },
    {
        id: "case-005",
        procedureSlug: "rhinoplasty/reduction",
        category: "Rhinoplasty",
        procedure: "Reduction rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/01-_Reduction/Patient_029_primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_029_primary_rhinoplasty/Front_view-_Pre-op_029_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_029_primary_rhinoplasty/Front_view___post-op__029__DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_029_primary_rhinoplasty/Left_profile-pre-op___029_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_029_primary_rhinoplasty/Left_profile-post-op_029_DxO.jpg"
            }
        ]
    },
    {
        id: "case-006",
        procedureSlug: "rhinoplasty/reduction",
        category: "Rhinoplasty",
        procedure: "Reduction rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/01-_Reduction/Patient_033_square",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_033_square/033_front_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_033_square/033_front_post.png"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_033_square/033_left_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_033_square/033_left_post.png"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_033_square/033_right_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_033_square/033_right_post.png"
            }
        ]
    },
    {
        id: "case-007",
        procedureSlug: "rhinoplasty/reduction",
        category: "Rhinoplasty",
        procedure: "Reduction rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Front_view_pre-op_036_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Front_view_post-op_0_036_DxO.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Right_profile_pre-op_0_036_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Right_profile_post-op_0_036_DxO.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Left_oblique_pre-op_0_036_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Left_oblique_post-op_0_036_DxO.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Right_oblique_pre-op_0_036_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Right_oblique_post-op_0_036_DxO.jpg"
            }
        ]
    },
    {
        id: "case-008",
        procedureSlug: "rhinoplasty/reduction",
        category: "Rhinoplasty",
        procedure: "Reduction rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Front_view_pre-op_037_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Front_view_post-op_037_b_DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Left_profile_pre-op_037_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Left_profile_post-op_037_DxO.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Right_profile_pre-op_037_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Right_profile_post-op_037_DxO.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Right_oblique_pre-op_037_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Right_oblique_post-op_037_DxO.jpg"
            }
        ]
    },
    {
        id: "case-009",
        procedureSlug: "rhinoplasty/reduction",
        category: "Rhinoplasty",
        procedure: "Reduction rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction/Front_view_pre-op_042_DxO.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction/Front_view_2_years_DxO_042.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction/Left_profile_pre-op_042_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction/Left_profile_2_years_DxO_042.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction/Right_profile_pre-op_042_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction/Right_profile_2_years_DxO_042.jpg"
            }
        ]
    },
    {
        id: "case-010",
        procedureSlug: "rhinoplasty/reduction",
        category: "Rhinoplasty",
        procedure: "Reduction rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/01-_Reduction/Patient_057_square",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_front_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_front_post.png"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_left_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_left_post.png"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_right_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_right_post.png"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_right_oblique_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_right_oblique_post.png"
            }
        ]
    },
    {
        id: "case-011",
        procedureSlug: "rhinoplasty/reduction",
        category: "Rhinoplasty",
        procedure: "Reduction rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/Front_pre_059.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/Front_post_059.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/L_pre_059.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/L_post_059.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/R_pre_059.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/R_post_059.jpg"
            },
            {
                label: "Oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/L_oblique_prere_059.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/L__obliquepost_059.jpg"
            },
            {
                label: "Oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/R_oblique_pre_059.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/R_oblique_post059.jpg"
            }
        ]
    },
    {
        id: "case-012",
        procedureSlug: "rhinoplasty/augmentation",
        category: "Rhinoplasty",
        procedure: "Augmentation rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/02-_Augmentation/Patient_002_Square",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_002_Square/002_front_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_002_Square/002_front_post.png"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_002_Square/002_left_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_002_Square/002_left_post.png"
            }
        ]
    },
    {
        id: "case-013",
        procedureSlug: "rhinoplasty/augmentation",
        category: "Rhinoplasty",
        procedure: "Augmentation rhinoplasty",
        consent: "restricted",
        source: "01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/Front_preop_099.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/Front_postop_099.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/L_preop_099.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/L_postop_099.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/R_preop_099.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/R_postop_099.jpg"
            },
            {
                label: "Oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/R_oblique_preop_099.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/R_oblique_postop_099.jpg"
            }
        ]
    },
    {
        id: "case-014",
        procedureSlug: "rhinoplasty/augmentation",
        category: "Rhinoplasty",
        procedure: "Augmentation rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Front_view_pre-operative_103.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Front_view_six_months_103.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Left_profile_pre-operative_103.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Left_profile_six_months_103.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Right_profile_pre-operative_103.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Right_profile_6_months_103.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Right_oblique_preoperative_103.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Right_oblique%2C_6_months._103.jpg"
            }
        ]
    },
    {
        id: "case-015",
        procedureSlug: "rhinoplasty/deviated-crooked",
        category: "Rhinoplasty",
        procedure: "Deviated / crooked nose",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square/008_front_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square/008_front_post.png"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square/008_left_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square/008_left_post.png"
            },
            {
                label: "Right semi-profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square/008_right_semi_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square/008_right_semi_post.png"
            }
        ]
    },
    {
        id: "case-016",
        procedureSlug: "rhinoplasty/deviated-crooked",
        category: "Rhinoplasty",
        procedure: "Deviated / crooked nose",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_010_square",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_010_square/010_front_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_010_square/010_front_post.png"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_010_square/010_left_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_010_square/010_left_post.png"
            }
        ]
    },
    {
        id: "case-017",
        procedureSlug: "rhinoplasty/deviated-crooked",
        category: "Rhinoplasty",
        procedure: "Deviated / crooked nose",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square/045_front_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square/045_front_post.png"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square/045_right_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square/045_right_post.png"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square/045_right_oblique_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square/045_right_oblique_post.png"
            }
        ]
    },
    {
        id: "case-018",
        procedureSlug: "rhinoplasty/deviated-crooked",
        category: "Rhinoplasty",
        procedure: "Deviated / crooked nose",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty/Front_view_preoperative_052.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty/Front_view_two_months_052.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty/Left_profile_preoperative_052.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty/Left_profile_two_months_052.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty/Left_oblique_preoperative_052.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty/Left_oblique_two_months_052.jpg"
            }
        ]
    },
    {
        id: "case-019",
        procedureSlug: "rhinoplasty/deviated-crooked",
        category: "Rhinoplasty",
        procedure: "Deviated / crooked nose",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Front_view_pre-op_054.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Front_view_6_months_054.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Right_profile_pre-op_054.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Right_profile_6_months_054.jpg.png"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Left_oblique_pre-op_054.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Left_oblique_6_months_054.png"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Skyline_view_pre-op_054.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Skyline_view_6_weeks_054.jpg"
            }
        ]
    },
    {
        id: "case-020",
        procedureSlug: "rhinoplasty/deviated-crooked",
        category: "Rhinoplasty",
        procedure: "Deviated / crooked nose",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/Just_cropped_front_before_W_067.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/Just_cropped_front_after_W_067.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/L_before_W_067.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/L_after_W_067.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/R_before_W_067.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/R_after_W_067.jpg"
            },
            {
                label: "Oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/R_oblique_before_W_067.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/R_oblique_after_W_067.jpg"
            }
        ]
    },
    {
        id: "case-021",
        procedureSlug: "rhinoplasty/secondary",
        category: "Rhinoplasty",
        procedure: "Secondary rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift/Front_pre-op_004_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift/Front_post-op_004_DxO.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift/Right_profile_pre-op_004_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift/Right_profile_post-op_004_DxO.jpg"
            },
            {
                label: "Right semi-profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift/Right_semi-profile_pre-op_004_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift/Right_semi-profile_post-op_004_DxO.jpg"
            }
        ]
    },
    {
        id: "case-022",
        procedureSlug: "rhinoplasty/secondary",
        category: "Rhinoplasty",
        procedure: "Secondary rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/04-_Secondary/Patient_005_secondary_rib_graft_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_005_secondary_rib_graft_rhinoplasty/Front_view_pre-op_005_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_005_secondary_rib_graft_rhinoplasty/Front_view_post-op_005_DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_005_secondary_rib_graft_rhinoplasty/Left_profile_pre-op_005_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_005_secondary_rib_graft_rhinoplasty/Left_profile_post-op_005_DxO.jpg"
            }
        ]
    },
    {
        id: "case-023",
        procedureSlug: "rhinoplasty/secondary",
        category: "Rhinoplasty",
        procedure: "Secondary rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/04-_Secondary/Patient_009_square",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_009_square/009_front_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_009_square/009_front_post.png"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_009_square/009_left_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_009_square/009_left_post.png"
            }
        ]
    },
    {
        id: "case-024",
        procedureSlug: "rhinoplasty/secondary",
        category: "Rhinoplasty",
        procedure: "Secondary rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/04-_Secondary/Patient_023_Secondary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_023_Secondary_rhinoplasty/Front_view___pre-op_023_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_023_Secondary_rhinoplasty/Front_view_post-op_9y_023_DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_023_Secondary_rhinoplasty/Left_profile_pre-op_023_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_023_Secondary_rhinoplasty/Left_view_post-op_9y_023_DxO.jpg"
            }
        ]
    },
    {
        id: "case-025",
        procedureSlug: "rhinoplasty/secondary",
        category: "Rhinoplasty",
        procedure: "Secondary rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty/Front_view_pre-op_027_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty/Front_view_post-op_027_DxO.png"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty/Left_profile_pre-op_027_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty/Left_profile_post-op_027_DxO.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty/Right_profile_pre-op_027_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty/Right_profile_post-op_027_DxO.jpg"
            }
        ]
    },
    {
        id: "case-026",
        procedureSlug: "rhinoplasty/secondary",
        category: "Rhinoplasty",
        procedure: "Secondary rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Front_view_pre-op_044_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Front_view_post-op_044_DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Left_profile_pre-op_044_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Left_profile_post-op_044_DxO.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Right_profile_pre-op_044_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/RIGHT_profile_post-op_044_DxO.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Left_oblique_pre-op_044_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Left_oblique_post-op_044_DxO.jpg"
            }
        ]
    },
    {
        id: "case-027",
        procedureSlug: "rhinoplasty/secondary",
        category: "Rhinoplasty",
        procedure: "Secondary rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty/Front_view_pre-op_053.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty/Front_view_post-op_053.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty/Right_profile_pre-op_053.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty/Right_profile_post-op_053.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty/Right_oblique_pre-op_053.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty/Right_oblique_post-op_053.jpg"
            }
        ]
    },
    {
        id: "case-028",
        procedureSlug: "rhinoplasty/secondary",
        category: "Rhinoplasty",
        procedure: "Secondary rhinoplasty",
        consent: "confirmed",
        source: "01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Front_view_preop_098.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Front_view_six_weeks__098.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Left_profile_preop_098.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Left_Profile_six_weeks_098.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Left_oblique_preop_098.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Left_oblique_six_weeks_098.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Right_oblique_preop_098.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Right_oblique_six_weeks_098.jpg"
            }
        ]
    },
    {
        id: "case-029",
        procedureSlug: "rhinoplasty/ultrasonic",
        category: "Rhinoplasty",
        procedure: "Ultrasonic rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty/Front_view_pre-op_007_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty/Front_view_post-op_007_DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty/Left_profile_pre-op_007_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty/Left_profile_post-op_007_DxO.jpg"
            },
            {
                label: "Right semi-profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty/Right_semi-profile_pre-op_007_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty/Right_semi-profile_post-op_007_DxO.jpg"
            }
        ]
    },
    {
        id: "case-030",
        procedureSlug: "rhinoplasty/ultrasonic",
        category: "Rhinoplasty",
        procedure: "Ultrasonic rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_014_ultrasonic_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_014_ultrasonic_rhinoplasty/Front_view_pre-op_014_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_014_ultrasonic_rhinoplasty/Front_view_post-op_014_DxO.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_014_ultrasonic_rhinoplasty/Right_profile_pre-op_014_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_014_ultrasonic_rhinoplasty/Right_profile_post-op_014_DxO.jpg"
            }
        ]
    },
    {
        id: "case-031",
        procedureSlug: "rhinoplasty/ultrasonic",
        category: "Rhinoplasty",
        procedure: "Ultrasonic rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_022__Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_022__Primary_rhinoplasty/Front_view_preop_022_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_022__Primary_rhinoplasty/Front_view_postop_022_DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_022__Primary_rhinoplasty/Left_profile__preop_022_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_022__Primary_rhinoplasty/Left_profile_post-op__022_DxO.jpg"
            }
        ]
    },
    {
        id: "case-032",
        procedureSlug: "rhinoplasty/ultrasonic",
        category: "Rhinoplasty",
        procedure: "Ultrasonic rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_028_Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_028_Primary_rhinoplasty/Front_view_pre-op_028_DxO.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_028_Primary_rhinoplasty/Front_view_post-op_028_DxO.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_028_Primary_rhinoplasty/Right_profile_pre-op_028_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_028_Primary_rhinoplasty/Right_profile_post-op_028_DxO.jpg"
            }
        ]
    },
    {
        id: "case-033",
        procedureSlug: "rhinoplasty/ultrasonic",
        category: "Rhinoplasty",
        procedure: "Ultrasonic rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square/032_front_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square/032_front_post.png"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square/032_right_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square/032_right_post.png"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square/032_left_oblique_pre.png",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square/032_left_oblique_post.jpeg"
            }
        ]
    },
    {
        id: "case-034",
        procedureSlug: "rhinoplasty/ultrasonic",
        category: "Rhinoplasty",
        procedure: "Ultrasonic rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Front_view_pre-op_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Front_view_post_op_DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Left_profile_pre-op_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Left_profile_post-op_DxO.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Right_profile_pre-op_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/right_profile_post-op_DxO.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Left_oblique_pre-op_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Left_oblique_post-op_DxO.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Right_oblique_pre-op_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Right_oblique_post-op_DxO.jpg"
            }
        ]
    },
    {
        id: "case-035",
        procedureSlug: "rhinoplasty/ultrasonic",
        category: "Rhinoplasty",
        procedure: "Ultrasonic rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty/Front_view_pre-op_035_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty/Front_view_post-op_035_DxO.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty/Right_profile_pre-op_035_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty/Right_profile_post-op_035_DxO.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty/Left_oblique__pre-op_035_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty/left_oblique_post-op_035_DxO.jpg"
            }
        ]
    },
    {
        id: "case-036",
        procedureSlug: "rhinoplasty/ultrasonic",
        category: "Rhinoplasty",
        procedure: "Ultrasonic rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_046_Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_046_Primary_rhinoplasty/front_view_pre-op_DxO_046.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_046_Primary_rhinoplasty/Front_view__post-op_3_months_DxO_046.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_046_Primary_rhinoplasty/right_profile_pre-op_DxO_046.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_046_Primary_rhinoplasty/Right_profile_postop_3_months_DxO_046.jpg"
            }
        ]
    },
    {
        id: "case-037",
        procedureSlug: "rhinoplasty/ultrasonic",
        category: "Rhinoplasty",
        procedure: "Ultrasonic rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty/Front_view_pre-op_DxO_049.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty/Front_view_6_weeks_DxO_049.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty/Right_profile_pre-op_DxO_049.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty/Right_profile_6_weeks_DxO_049.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty/Left_oblique_pre-op_DxO_049.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty/Left_oblique_6_weeks_DxO_049.jpg"
            }
        ]
    },
    {
        id: "case-038",
        procedureSlug: "rhinoplasty/ultrasonic",
        category: "Rhinoplasty",
        procedure: "Ultrasonic rhinoplasty",
        consent: "unconfirmed",
        source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/Front_before_066_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/Front_after_066_DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/L_before_066_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/L_after_066_DxO.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/R_before_066_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/R_after_066_DxO.jpg"
            },
            {
                label: "Oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/R_oblique_before_066_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/R_oblique_after_066_DxO.jpg"
            }
        ]
    },
    {
        id: "case-039",
        procedureSlug: "facial-sculpting/chin-augmentation",
        category: "Facial sculpting",
        procedure: "Chin enhancement",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/01-_Chin_Enhancement_Ready/01_Patient_web_099_-_face,_sculpting",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/01_Patient_web_099_-_face%2C_sculpting/01__front_view_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/01_Patient_web_099_-_face%2C_sculpting/02-front_view_three_months.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/01_Patient_web_099_-_face%2C_sculpting/03_Left_profile_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/01_Patient_web_099_-_face%2C_sculpting/04-_left_profile_three_months.jpg"
            }
        ]
    },
    {
        id: "case-040",
        procedureSlug: "facial-sculpting/chin-augmentation",
        category: "Facial sculpting",
        procedure: "Chin enhancement",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_|_web_074_-_nose",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_%7C_web_074_-_nose/05-_front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_%7C_web_074_-_nose/06-_front_view_post-op.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_%7C_web_074_-_nose/01-_left_profile_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_%7C_web_074_-_nose/02-_left_profile_post-op.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_%7C_web_074_-_nose/03-left_oblique_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_%7C_web_074_-_nose/04-_left_oblique_post-op.jpg"
            }
        ]
    },
    {
        id: "case-041",
        procedureSlug: "facial-sculpting/chin-augmentation",
        category: "Facial sculpting",
        procedure: "Chin enhancement",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_|_web_038_-_facelift,_neck_lift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_%7C_web_038_-_facelift%2C_neck_lift/05-front_view_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_%7C_web_038_-_facelift%2C_neck_lift/06-front_view_postop.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_%7C_web_038_-_facelift%2C_neck_lift/03-left_profile_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_%7C_web_038_-_facelift%2C_neck_lift/04-left_profile_postop.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_%7C_web_038_-_facelift%2C_neck_lift/01__left_oblique_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_%7C_web_038_-_facelift%2C_neck_lift/02-left_oblique_postop.jpg"
            }
        ]
    },
    {
        id: "case-042",
        procedureSlug: "facial-sculpting/chin-augmentation",
        category: "Facial sculpting",
        procedure: "Chin enhancement",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift/05-front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift/06-front_view_postop.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift/01-left_profile_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift/02-left_profile_postop.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift/03-left_oblique-preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift/04-left_oblique_Post_op.jpg"
            }
        ]
    },
    {
        id: "case-043",
        procedureSlug: "facial-sculpting/chin-augmentation",
        category: "Facial sculpting",
        procedure: "Chin enhancement",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift/05_front_view_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift/06-_front_view_postop.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift/03-Left_profile_preop_copy.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift/06-left_profile_postop.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift/01-Left_oblique_preop_copy.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift/02-left_oblique_post_op.jpg"
            }
        ]
    },
    {
        id: "case-044",
        procedureSlug: "facial-sculpting/chin-augmentation",
        category: "Facial sculpting",
        procedure: "Chin enhancement",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction/05_front_view_pre-op_042_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction/06_Front_view_2_years_DxO_042.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction/03_Left_profile_pre-op_042_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction/04_Left_profile_view_post-op_042_DxO.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction/01_Right_profile_pre-op_042_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction/02_right_profile_post-op_042_DxO.jpg"
            }
        ]
    },
    {
        id: "case-045",
        procedureSlug: "facial-sculpting/anterior-neck-lift",
        category: "Facial sculpting",
        procedure: "Anterior neck lift",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/02-_Anterior_necklift_Ready/01_Patient__|_web_084_Anterior_necklift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/01_Patient__%7C_web_084_Anterior_necklift/01_Front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/01_Patient__%7C_web_084_Anterior_necklift/02_Front_view_13_years_copy.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/01_Patient__%7C_web_084_Anterior_necklift/03_Left_profile_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/01_Patient__%7C_web_084_Anterior_necklift/04_Left_profile_13_years_copy.jpg"
            }
        ]
    },
    {
        id: "case-046",
        procedureSlug: "facial-sculpting/anterior-neck-lift",
        category: "Facial sculpting",
        procedure: "Anterior neck lift",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift/03_Front_view_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift/04_Front_view_postop.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift/01_left_profile_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift/02_left_profile_postop.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift/05_right_profile_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift/06__right_profile_post.jpg"
            }
        ]
    },
    {
        id: "case-047",
        procedureSlug: "facial-sculpting/anterior-neck-lift",
        category: "Facial sculpting",
        procedure: "Anterior neck lift",
        consent: "confirmed",
        source: "02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK/05_Front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK/06_Front_view_1_year.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK/01__right_profile_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK/02_Right_profile_1_year.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK/03_Right_oblique_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK/04_Right_oblique_1_year.jpg"
            }
        ]
    },
    {
        id: "case-048",
        procedureSlug: "facial-sculpting/anterior-neck-lift",
        category: "Facial sculpting",
        procedure: "Anterior neck lift",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift",
        views: [
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift/1a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift/1b.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift/2a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift/2b.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift/3a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift/3b.jpg"
            }
        ]
    },
    {
        id: "case-049",
        procedureSlug: "facial-sculpting/anterior-neck-lift",
        category: "Facial sculpting",
        procedure: "Anterior neck lift",
        consent: "confirmed",
        source: "02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok",
        views: [
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok/3_Left_profile_neck_flexion_preoperative_DxO_073.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok/4_Left_profile_neck_flexion_one_year_DxO_073.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok/1_Right_profile_preoperative_DxO_073.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok/2_Right_profile_one_year_DxO_073.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok/5_Left_oblique_preoperative_DxO_073.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok/6_Left_oblique_one_year_DxO_073.jpg"
            }
        ]
    },
    {
        id: "case-050",
        procedureSlug: "facial-sculpting/anterior-neck-lift",
        category: "Facial sculpting",
        procedure: "Anterior neck lift",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift/05_front_view_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift/06-_front_view_postop.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift/03-Left_profile_preop_copy.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift/06-left_profile_postop.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift/01-Left_oblique_preop_copy.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift/02-left_oblique_post_op.jpg"
            }
        ]
    },
    {
        id: "case-051",
        procedureSlug: "facial-sculpting/anterior-neck-lift",
        category: "Facial sculpting",
        procedure: "Anterior neck lift",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/02-_Anterior_necklift_Ready/07_Patient_190",
        views: [
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/07_Patient_190/1a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/07_Patient_190/1b.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/07_Patient_190/2a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/07_Patient_190/2b.jpg"
            }
        ]
    },
    {
        id: "case-052",
        procedureSlug: "facial-sculpting/buccal-fat-reduction",
        category: "Facial sculpting",
        procedure: "Buccal fat reduction",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/1_Patient_144_old",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/1_Patient_144_old/01_Pre-op_front_view.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/1_Patient_144_old/02_Post-op_front_view.jpg"
            },
            {
                label: "Profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/1_Patient_144_old/03_Semi-profile_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/1_Patient_144_old/04_Semi-profile_post-op.jpg"
            }
        ]
    },
    {
        id: "case-053",
        procedureSlug: "facial-sculpting/buccal-fat-reduction",
        category: "Facial sculpting",
        procedure: "Buccal fat reduction",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/2_Patient_web_028_-_facelift,_neck_lift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/2_Patient_web_028_-_facelift%2C_neck_lift/01_Front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/2_Patient_web_028_-_facelift%2C_neck_lift/02_front_view_post-op.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/2_Patient_web_028_-_facelift%2C_neck_lift/03-Left_oblique_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/2_Patient_web_028_-_facelift%2C_neck_lift/04_left_oblique_post-op.jpg"
            }
        ]
    },
    {
        id: "case-054",
        procedureSlug: "facial-sculpting/fat-transfer",
        category: "Facial sculpting",
        procedure: "Fat transfer",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face,_sculpting",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face%2C_sculpting/01__front_view_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face%2C_sculpting/02-front_view_three_months.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face%2C_sculpting/03_Left_profile_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face%2C_sculpting/04-_left_profile_three_months.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face%2C_sculpting/05_Left_oblique_pre-op_02.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face%2C_sculpting/06_Left_oblique_three_months.jpg"
            }
        ]
    },
    {
        id: "case-055",
        procedureSlug: "facial-sculpting/fat-transfer",
        category: "Facial sculpting",
        procedure: "Fat transfer",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/04-_Fat_transfer_Ready/03_Patient_|_web_109_-_nose,_fat_transfer",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/03_Patient_%7C_web_109_-_nose%2C_fat_transfer/01_Front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/03_Patient_%7C_web_109_-_nose%2C_fat_transfer/02-_front_vire_post-op.jpg"
            }
        ]
    },
    {
        id: "case-056",
        procedureSlug: "facial-sculpting/fat-transfer",
        category: "Facial sculpting",
        procedure: "Fat transfer",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift,_neck_lift,_fat_transfer,_blepahroplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/01_front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/02_Front_view_post-op.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/03_Left_profile_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_Left_profile_post-op.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/05_Right_oblique_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/06_Right_oblique_post_op.jpg"
            }
        ]
    },
    {
        id: "case-057",
        procedureSlug: "facial-sculpting/facial-liposuction",
        category: "Facial sculpting",
        procedure: "Facial liposuction",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/05-_Facial_liposuction__Ready/1_Patient_144_old",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/05-_Facial_liposuction__Ready/1_Patient_144_old/1-front-pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/05-_Facial_liposuction__Ready/1_Patient_144_old/02_Post-op_front_view.jpg"
            },
            {
                label: "Profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/05-_Facial_liposuction__Ready/1_Patient_144_old/03_Semi-profile_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/05-_Facial_liposuction__Ready/1_Patient_144_old/04_Semi-profile_post-op.jpg"
            }
        ]
    },
    {
        id: "case-058",
        procedureSlug: "facial-sculpting/otoplasty-pinnaplasty",
        category: "Facial sculpting",
        procedure: "Otoplasty / pinnaplasty",
        consent: "unconfirmed",
        source: "02-_Facial_sculpting/07-_Otoplasty_Ready/Patient_091_Secondary_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/07-_Otoplasty_Ready/Patient_091_Secondary_rhinoplasty/01_front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/07-_Otoplasty_Ready/Patient_091_Secondary_rhinoplasty/02_front_view_postop.jpg"
            }
        ]
    },
    {
        id: "case-059",
        procedureSlug: "face-rejuvenation/facelift",
        category: "Face rejuvenation",
        procedure: "Facelift (deep plane)",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift,_rhinoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_03_front_bef.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_04_front_post.jpg"
            },
            {
                label: "Oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_01_oblique_bef.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_02_oblique_post.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_05_side_bef.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_06_side_post.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_07_side_down_bef.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_08_side_down_post.jpg"
            }
        ]
    },
    {
        id: "case-060",
        procedureSlug: "face-rejuvenation/facelift",
        category: "Face rejuvenation",
        procedure: "Facelift (deep plane)",
        consent: "restricted",
        source: "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_01_Front_bef.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_02_Front_post.jpg"
            },
            {
                label: "Oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_03_oblique_bef.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_04_oblique_post.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_05_side_bef.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_06_side_post.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_07_side_down_bef.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_08_side_down_post.jpg"
            }
        ]
    },
    {
        id: "case-061",
        procedureSlug: "face-rejuvenation/facelift",
        category: "Face rejuvenation",
        procedure: "Facelift (deep plane)",
        consent: "restricted",
        source: "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG/03_03_front_bef.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG/03_04_front_post.jpg"
            },
            {
                label: "Oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG/03_01_oblique_bef.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG/03_02_oblique_post.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG/03_05_side_bef.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG/03_06_side_post.jpg"
            }
        ]
    },
    {
        id: "case-062",
        procedureSlug: "face-rejuvenation/facelift",
        category: "Face rejuvenation",
        procedure: "Facelift (deep plane)",
        consent: "confirmed",
        source: "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK/04_01_Front_view_pre-op_110.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK/04_02_Front_view_post-op_110.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK/04_05_Right_profile_pre-op_110.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK/04_06_Right_profile_postop_110.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK/04_03_Right_Oblique_pre-op_110.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK/04_04_Right_oblique._Postop_110.jpg"
            }
        ]
    },
    {
        id: "case-063",
        procedureSlug: "face-rejuvenation/facelift",
        category: "Face rejuvenation",
        procedure: "Facelift (deep plane)",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new _215_old_Facelift_and_neck_lift",
        views: [
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_1a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_1b.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_2a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_2b.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_3a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_3b.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_4a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_4b.jpg"
            }
        ]
    },
    {
        id: "case-064",
        procedureSlug: "face-rejuvenation/facelift",
        category: "Face rejuvenation",
        procedure: "Facelift (deep plane)",
        consent: "confirmed",
        source: "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK/06_03_Front_view_pre-op_093.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK/06_04-_front_view_postop.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK/06_05_Right_profile_pre-op_093.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK/06_06-_Right_profile_post_op.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK/06_01_Right_oblique_pre-op_b_093.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK/06_02__right_oblique_postop.jpg"
            }
        ]
    },
    {
        id: "case-065",
        procedureSlug: "face-rejuvenation/facelift",
        category: "Face rejuvenation",
        procedure: "Facelift (deep plane)",
        consent: "confirmed",
        source: "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_03_Front_view_pre-op_094.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_04_Front_view_9_months_094.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_07_Right_profile_pre-op_094.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_08_Right_profile_9_months_094.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_09_Right_profile_neck_flexion_pre-op_094.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_10_Right_profile_neck_flexion_5_months_094.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_05_Left_oblique_pre-op_094.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_06_Left_oblique_9_months_094.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_01_Right_oblique_pre-op_094.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_02_Right_oblique_5_months_094.jpg"
            }
        ]
    },
    {
        id: "case-066",
        procedureSlug: "face-rejuvenation/facelift",
        category: "Face rejuvenation",
        procedure: "Facelift (deep plane)",
        consent: "confirmed",
        source: "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK/09_03_Front_view_preoperative_102.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK/09_04_Front_view_six_months_102.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK/09_07_Right_profile_preoperative_102.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK/09_08_Right_profile_6_months._102.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK/09_01_Left_oblique_preoperative_102.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK/09_02_Left_oblique_six_months_102.jpg"
            }
        ]
    },
    {
        id: "case-067",
        procedureSlug: "face-rejuvenation/short-scar-facelift",
        category: "Face rejuvenation",
        procedure: "Short scar facelift",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/01_Patient_216_old_043_new_Short_Scar_Facelift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/01_Patient_216_old_043_new_Short_Scar_Facelift/01_01_Front_pre-op__43.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/01_Patient_216_old_043_new_Short_Scar_Facelift/01_02_Front_view_post-op__043.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/01_Patient_216_old_043_new_Short_Scar_Facelift/01_05_Right_profile_pre-op__043.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/01_Patient_216_old_043_new_Short_Scar_Facelift/01_06_Right_profile_post-op__043.jpg"
            }
        ]
    },
    {
        id: "case-068",
        procedureSlug: "face-rejuvenation/short-scar-facelift",
        category: "Face rejuvenation",
        procedure: "Short scar facelift",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face,_sculpting",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face%2C_sculpting/02_01__front_view_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face%2C_sculpting/02_02-front_view_three_months.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face%2C_sculpting/02_03_Left_profile_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face%2C_sculpting/02_04-_left_profile_three_months.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face%2C_sculpting/02_05_Left_oblique_pre-op_02.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face%2C_sculpting/02_06_Left_oblique_three_months.jpg"
            }
        ]
    },
    {
        id: "case-069",
        procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
        category: "Face rejuvenation",
        procedure: "Deep plane neck lift",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_03_Front_view_pre-op_106.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_04_Front_view_2_months_106.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_07_Left_profile_pre-op_106.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_08_Left_profile_2_months_106.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_01_Left_oblique_pre-op_106.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_02_Left_oblique_2_months_106.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_05_Right_oblique_pre-op_106.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_06_Right_oblique_2_months_106.jpg"
            }
        ]
    },
    {
        id: "case-070",
        procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
        category: "Face rejuvenation",
        procedure: "Deep plane neck lift",
        consent: "restricted",
        source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_01_Front_view_pre-op_087.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_02_Front_view_2_months_02_087.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_05_Left_profile_pre-op_087.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_06_Left_profile_2_months_087.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_07_Left_profile_neck_flexion_pre-op_087.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_08_Left_profile_neck_flexion_2_months_087.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_03_Right_oblique_pre-op_087.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_04_Right_oblique_2_months_087.jpg"
            }
        ]
    },
    {
        id: "case-071",
        procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
        category: "Face rejuvenation",
        procedure: "Deep plane neck lift",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_05_Front_view_pre-op_097.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_06_Front_view_04_months_097.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_01_Left_profile_pre-op_097.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_02_Left_profile_04_months_097.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_07_Right_profile_neck_flexation_pre-op_097.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_08_Right_profile_neck_flexion_04_months_097.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_03_Right_oblique_pre-op_097.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_04_Right_oblique_04_months_097.jpg"
            }
        ]
    },
    {
        id: "case-072",
        procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
        category: "Face rejuvenation",
        procedure: "Deep plane neck lift",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift,_neck_lift,_fat_transfer,_blepahroplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_01_front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_02_Front_view_post-op.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_03_Left_profile_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_04_Left_profile_post-op.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_05_Right_oblique_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_06_Right_oblique_post_op.jpg"
            }
        ]
    },
    {
        id: "case-073",
        procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
        category: "Face rejuvenation",
        procedure: "Deep plane neck lift",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/05_Patient_web_028_-_facelift,_neck_lift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/05_Patient_web_028_-_facelift%2C_neck_lift/05_01_Front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/05_Patient_web_028_-_facelift%2C_neck_lift/05_02_front_view_post-op.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/05_Patient_web_028_-_facelift%2C_neck_lift/05_03-Left_oblique_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/05_Patient_web_028_-_facelift%2C_neck_lift/05_04_left_oblique_post-op.jpg"
            }
        ]
    },
    {
        id: "case-074",
        procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
        category: "Face rejuvenation",
        procedure: "Deep plane neck lift",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient",
        views: [
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient/06_1a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient/06_1b.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient/06_2a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient/06_2b.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient/06_3a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient/06_3b.jpg"
            }
        ]
    },
    {
        id: "case-075",
        procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
        category: "Face rejuvenation",
        procedure: "Deep plane neck lift",
        consent: "confirmed",
        source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_03_Front_view_preoperative_102.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_04_Front_view_six_months_102.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_05_Right_Profile_Neck_Flexion_Preoperative_102.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_06_Right_profile%2C_neck_flexion%2C_3_months._102.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_07_Right_profile_preoperative_102.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_08_Right_profile_6_months._102.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_01_Left_oblique_preoperative_102.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_02_Left_oblique_six_months_102.jpg"
            }
        ]
    },
    {
        id: "case-076",
        procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
        category: "Face rejuvenation",
        procedure: "Deep plane neck lift",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/08_Patient_041_Necklift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/08_Patient_041_Necklift/08_Front_pre-op_041_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/08_Patient_041_Necklift/08_Front_post-op_041_DxO.jpg"
            }
        ]
    },
    {
        id: "case-077",
        procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
        category: "Face rejuvenation",
        procedure: "Deep plane neck lift",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_03_Front_view_preop_DxO_056.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_04_Front_view_three_months_DxO_056.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_05_Left_profile_preop__DxO_056.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_06Left_profile_three_months_DxO_056.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_07__Left_profile_preop_DxO_056.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_08_Left_profile_three_months_neck_flexion_DxO_056.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_01_Left_oblique_preop_DxO_056.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_02_Left_oblique_three_months_DxO_056.jpg"
            }
        ]
    },
    {
        id: "case-078",
        procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
        category: "Face rejuvenation",
        procedure: "Deep plane neck lift",
        consent: "restricted",
        source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG/10_07_Front_before_069_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG/10_08_Front_after_069_DxO.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG/10_03_L_down_before_069_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG/10_04_L_down_after_069_DxO.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG/10_01_R_before_069_DxO.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG/10_02_R_after_069_DxO.jpg"
            }
        ]
    },
    {
        id: "case-079",
        procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
        category: "Face rejuvenation",
        procedure: "Deep plane neck lift",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/11_Patient_web_085_-_face",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/11_Patient_web_085_-_face/11_03_Front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/11_Patient_web_085_-_face/11_04_Front_view_post-op.jpg"
            }
        ]
    },
    {
        id: "case-080",
        procedureSlug: "face-rejuvenation/brow-forehead-lift",
        category: "Face rejuvenation",
        procedure: "Brow lift",
        consent: "restricted",
        source: "03-_Face_rejuvenation_Ready/04-_Brow_lift_,_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG/01_03-front_view_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG/01_04_-front_view_postop.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG/01_05-left_profile_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG/01_06-left_profile_postop.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG/01_01-_Right_oblique_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG/01_02-right_oblique_postop.jpg"
            }
        ]
    },
    {
        id: "case-081",
        procedureSlug: "face-rejuvenation/brow-forehead-lift",
        category: "Face rejuvenation",
        procedure: "Brow lift",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/04-_Brow_lift_,_Temporal_lift_ready/02_Patient 119_new_facelift_and_neck_lift_and_temporal_lift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/02_Patient%20119_new_facelift_and_neck_lift_and_temporal_lift/02_03_Front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/02_Patient%20119_new_facelift_and_neck_lift_and_temporal_lift/02_04__front_view_postop.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/02_Patient%20119_new_facelift_and_neck_lift_and_temporal_lift/02_05_left_oblique_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/02_Patient%20119_new_facelift_and_neck_lift_and_temporal_lift/02_06_Left_oblique_post-op.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/02_Patient%20119_new_facelift_and_neck_lift_and_temporal_lift/02_01_right_oblique_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/02_Patient%20119_new_facelift_and_neck_lift_and_temporal_lift/02_02_right_oblique_post-op.jpg"
            }
        ]
    },
    {
        id: "case-082",
        procedureSlug: "face-rejuvenation/brow-forehead-lift",
        category: "Face rejuvenation",
        procedure: "Brow lift",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/04-_Brow_lift_,_Temporal_lift_ready/03_Patient_087_facelift-necklift-temporal_lift",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/03_Patient_087_facelift-necklift-temporal_lift/03_01_front_view_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/03_Patient_087_facelift-necklift-temporal_lift/03_02_frontview_postop.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/03_Patient_087_facelift-necklift-temporal_lift/03_03_Left_oblique_preop.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/03_Patient_087_facelift-necklift-temporal_lift/03_04_left_oblique_post-op.jpg"
            }
        ]
    },
    {
        id: "case-083",
        procedureSlug: "face-rejuvenation/blepharoplasty",
        category: "Face rejuvenation",
        procedure: "Blepharoplasty",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/02_Patient_web_095_-_nose,_eyes",
        views: [
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/02_Patient_web_095_-_nose%2C_eyes/02_1a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/02_Patient_web_095_-_nose%2C_eyes/02_1b.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/02_Patient_web_095_-_nose%2C_eyes/02_2a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/02_Patient_web_095_-_nose%2C_eyes/02_2b.jpg"
            }
        ]
    },
    {
        id: "case-084",
        procedureSlug: "face-rejuvenation/blepharoplasty",
        category: "Face rejuvenation",
        procedure: "Blepharoplasty",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/03_Patient_web_117_-_nose- blepharoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/03_Patient_web_117_-_nose-%20blepharoplasty/03_01-_front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/03_Patient_web_117_-_nose-%20blepharoplasty/03_02-_Front_view_post-op.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/03_Patient_web_117_-_nose-%20blepharoplasty/03_03_left_profile_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/03_Patient_web_117_-_nose-%20blepharoplasty/03_04__Left_profile_post-op.jpg"
            }
        ]
    },
    {
        id: "case-085",
        procedureSlug: "face-rejuvenation/blepharoplasty",
        category: "Face rejuvenation",
        procedure: "Blepharoplasty",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/04_Patient_web_112_-_facelift,_neck_lift,_fat_transfer,_blepahroplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_01_front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_02_Front_view_post-op.jpg"
            },
            {
                label: "Right oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_03_Right_oblique_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_04_Right_oblique_post_op.jpg"
            }
        ]
    },
    {
        id: "case-086",
        procedureSlug: "face-rejuvenation/blepharoplasty",
        category: "Face rejuvenation",
        procedure: "Blepharoplasty",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty/05_01-_front_view_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty/05_02-_front_view_post-op.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty/05_05-_left_profile_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty/05_06-_left_profile_postop.jpg"
            },
            {
                label: "Left oblique",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty/05_03-_left_oblique_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty/05_04-_left_oblique_post-op.jpg"
            }
        ]
    },
    {
        id: "case-087",
        procedureSlug: "face-rejuvenation/blepharoplasty",
        category: "Face rejuvenation",
        procedure: "Blepharoplasty",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/07_Patient_web_082_-_eyes",
        views: [
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/07_Patient_web_082_-_eyes/07_01_pre-op.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/07_Patient_web_082_-_eyes/07_02_post-op.jpg"
            }
        ]
    },
    {
        id: "case-088",
        procedureSlug: "face-rejuvenation/blepharoplasty",
        category: "Face rejuvenation",
        procedure: "Blepharoplasty",
        consent: "unconfirmed",
        source: "03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/08_Patient_123_new",
        views: [
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/08_Patient_123_new/08_1a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/08_Patient_123_new/08_1b.jpg"
            },
            {
                label: "View",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/08_Patient_123_new/08_2a.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/08_Patient_123_new/08_2b.jpg"
            }
        ]
    },
    {
        id: "case-089",
        procedureSlug: "breast-surgery/augmentation",
        category: "Breast surgery",
        procedure: "Breast augmentation",
        consent: "unconfirmed",
        source: "04-Breast_Surgery/01-Augmentation/Patient_1",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/1_front_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/1_front_post.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/1_left_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/1_left_post.jpg"
            }
        ]
    },
    {
        id: "case-090",
        procedureSlug: "breast-surgery/augmentation",
        category: "Breast surgery",
        procedure: "Breast augmentation",
        consent: "unconfirmed",
        source: "04-Breast_Surgery/01-Augmentation/Patient_2",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/2_front_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/2_front_post.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/2_left_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/2_left_post.jpg"
            }
        ]
    },
    {
        id: "case-091",
        procedureSlug: "breast-surgery/augmentation",
        category: "Breast surgery",
        procedure: "Breast augmentation",
        consent: "unconfirmed",
        source: "04-Breast_Surgery/01-Augmentation/Patient_3",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/3_front_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/3_front_post.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/3_left_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/3_left_post.jpg"
            }
        ]
    },
    {
        id: "case-092",
        procedureSlug: "breast-surgery/augmentation",
        category: "Breast surgery",
        procedure: "Breast augmentation",
        consent: "unconfirmed",
        source: "04-Breast_Surgery/01-Augmentation/Patient_4",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/4_front_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/4_front_post.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/4_left_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/4_left_post.jpg"
            }
        ]
    },
    {
        id: "case-093",
        procedureSlug: "breast-surgery/augmentation",
        category: "Breast surgery",
        procedure: "Breast augmentation",
        consent: "unconfirmed",
        source: "04-Breast_Surgery/01-Augmentation/Patient_5",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/5_front_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/5_front_post.jpg"
            }
        ]
    },
    {
        id: "case-094",
        procedureSlug: "breast-surgery/reduction",
        category: "Breast surgery",
        procedure: "Breast reduction",
        consent: "unconfirmed",
        source: "04-Breast_Surgery/02-Reduction/Patient_1",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/02-Reduction/1_front_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/02-Reduction/1_front_post.jpg"
            }
        ]
    },
    {
        id: "case-095",
        procedureSlug: "breast-surgery/reduction",
        category: "Breast surgery",
        procedure: "Breast reduction",
        consent: "unconfirmed",
        source: "04-Breast_Surgery/02-Reduction/Patient_2",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/02-Reduction/2_front_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/02-Reduction/2_front_post.jpg"
            }
        ]
    },
    {
        id: "case-096",
        procedureSlug: "breast-surgery/uplift-mastopexy",
        category: "Breast surgery",
        procedure: "Breast uplift / mastopexy",
        consent: "unconfirmed",
        source: "04-Breast_Surgery/03-Mastopexy/Patient_1",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/03-Mastopexy/1_front_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/03-Mastopexy/1_front_post.jpg"
            }
        ]
    },
    {
        id: "case-097",
        procedureSlug: "breast-surgery/uplift-mastopexy",
        category: "Breast surgery",
        procedure: "Breast uplift / mastopexy",
        consent: "unconfirmed",
        source: "04-Breast_Surgery/03-Mastopexy/Patient_2",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/03-Mastopexy/2_front_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/03-Mastopexy/2_front_post.jpg"
            }
        ]
    },
    {
        id: "case-098",
        procedureSlug: "breast-surgery/gynaecomastia",
        category: "Breast surgery",
        procedure: "Gynaecomastia",
        consent: "unconfirmed",
        source: "04-Breast_Surgery/04-Gynaecomastia/Patient_1",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/1_front_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/1_front_post.jpg"
            }
        ]
    },
    {
        id: "case-099",
        procedureSlug: "breast-surgery/gynaecomastia",
        category: "Breast surgery",
        procedure: "Gynaecomastia",
        consent: "unconfirmed",
        source: "04-Breast_Surgery/04-Gynaecomastia/Patient_2",
        views: [
            {
                label: "Front view",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/2_front_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/2_front_post.jpg"
            },
            {
                label: "Left profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/2_left_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/2_left_post.jpg"
            },
            {
                label: "Right profile",
                before: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/2_right_pre.jpg",
                after: "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/2_right_post.jpg"
            }
        ]
    }
];
const approvedCases = patientCases.filter((c)=>c.consent === "confirmed");
}),
"[project]/src/content/procedures.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "procedureBySlug",
    ()=>procedureBySlug,
    "procedures",
    ()=>procedures,
    "proceduresInSection",
    ()=>proceduresInSection,
    "sectionBySlug",
    ()=>sectionBySlug,
    "sections",
    ()=>sections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-ssr] (ecmascript)");
;
const sections = [
    {
        slug: "rhinoplasty",
        title: "Rhinoplasty and nose reshaping",
        metaTitle: "Rhinoplasty in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Rhinoplasty and nose reshaping with Lucian Ion, consultant plastic surgeon, Upper Wimpole Street, London. Reduction, augmentation, crooked nose, secondary and ultrasonic rhinoplasty.",
        standfirst: "Nose reshaping asks for precision, careful planning and attentive follow-up. Each nose sits in a face, so the work is as much about balance as it is about the nose itself.",
        intro: [
            "Rhinoplasty covers a wide range of work, from softening a profile to rebuilding a nose that has been operated on before. The categories below share a great deal of technique, and most operations draw on more than one of them.",
            "Planning uses photography and computer simulation to make the conversation concrete. A simulation is a way of agreeing a direction together; it is not a promise of a result, because skin, cartilage and healing all have a say.",
            "Ultrasonic instruments are part of the practice and are described on their own page, because they change how the nasal bones can be shaped rather than what the aim of the operation is."
        ],
        image: "nose-01.jpg",
        imageAlt: "Black and white editorial portrait, profile of a nose in raking light"
    },
    {
        slug: "facial-sculpting",
        title: "Facial sculpting",
        metaTitle: "Facial sculpting in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Facial sculpting with Lucian Ion in London: chin and cheek proportion, jawline and neck contour, buccal fat reduction, fat transfer, facial liposuction and ear surgery.",
        standfirst: "Changes to facial proportion — the chin, the cheeks, the jawline, the neck — read as a whole rather than as separate features.",
        intro: [
            "Sculpting procedures adjust the framework and the soft tissue that sits over it. Small changes to the chin or the cheek can alter how the nose, the jawline and the neck are read, which is why these operations are so often planned together.",
            "Because the aim is proportion rather than size, assessment matters more here than anywhere else. Photographs and 3D imaging are used to describe the shape of a face in measurable terms and to test a plan before anything is agreed.",
            "Some of this work is surgical and some is not. Where a non-surgical option is a reasonable alternative it is named on the relevant page."
        ],
        image: "sculpting-01.jpg",
        imageAlt: "Black and white editorial portrait, jawline and neck in profile"
    },
    {
        slug: "face-rejuvenation",
        title: "Face and neck rejuvenation",
        metaTitle: "Facelift and face rejuvenation in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Face and neck rejuvenation with Lucian Ion in London: deep plane facelift, short scar facelift, deep plane neck lift, brow lift and eyelid surgery.",
        standfirst: "Rejuvenation surgery repositions tissue that has descended and restores volume that has been lost, without changing who a face belongs to.",
        intro: [
            "The face ages in layers — skin, fat, deeper support and bone — and each layer needs a different answer. A plan usually combines more than one procedure because a single one rarely addresses everything a patient has noticed.",
            "The intention is a face that looks rested rather than altered. That means accepting some limits: surgery does not stop ageing, and skin quality sets part of the ceiling on what is achievable.",
            "Where a non-surgical treatment would serve a patient better, or would serve them well enough for now, it is worth saying so at the consultation."
        ],
        image: "rejuvenation-01.jpg",
        imageAlt: "Black and white editorial portrait, face turned to the light"
    },
    {
        slug: "breast-surgery",
        title: "Breast and torso surgery",
        metaTitle: "Breast surgery in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Breast surgery with Lucian Ion in London: breast augmentation, breast reduction, breast uplift or mastopexy, and gynaecomastia surgery for men.",
        standfirst: "Breast and torso surgery works on proportion, position and shape — for women and for men.",
        intro: [
            "Size is only one part of the picture. Position, footprint on the chest, skin quality and symmetry all decide whether a result sits comfortably with the rest of the body.",
            "Most patients arrive with a photograph of an outcome they like. That is a useful starting point, and the consultation is where it meets the reality of their own tissue.",
            "Several of these operations are often combined — an uplift with a small implant, for example — and the trade-offs of combining them are discussed on the individual pages."
        ],
        image: "breasts-01.jpg",
        imageAlt: "Black and white editorial study of the torso, soft studio light"
    }
];
const sectionBySlug = (slug)=>sections.find((s)=>s.slug === slug);
/* ---------------------------------------------------------------------------
 * Shared building blocks. Kept general and non-numeric on purpose.
 * ------------------------------------------------------------------------- */ const generalRisks = [
    "Bleeding, infection and delayed healing are possible after any operation.",
    "Scars are permanent. Their position is planned; how they mature varies between people and cannot be promised.",
    "Swelling and bruising settle unevenly, so an early appearance is not the final one.",
    "Numbness or altered sensation near the operated area is common early on and can occasionally persist.",
    "Asymmetry exists in every face and body before surgery and can still be visible afterwards.",
    "A result may fall short of what was hoped for, and revision surgery is sometimes considered.",
    "Anaesthetic carries its own risks, which the anaesthetist discusses separately."
];
const generalRecovery = [
    "Arrange time away from work and from driving, and someone to be with you for the first days at home.",
    "Plan for follow-up appointments, dressing or suture changes and the review photographs that go with them.",
    "Expect a period when exercise, heavy lifting and alcohol are restricted.",
    "Swelling is worse in the mornings and after being upright for long spells; this is normal and eases.",
    "Ask about smoking, vaping and any medicines or supplements you take well before a date is set."
];
const generalQuestions = [
    "Am I a good candidate for this operation, and what makes you say so?",
    "What would you expect this to change, and what would it leave unchanged?",
    "Which alternatives would you consider for someone in my position?",
    "Where will the scars be and how will they be cared for?",
    "What does your follow-up involve, and who do I contact if I am worried?",
    "What happens, practically and financially, if a revision is needed?"
];
const confirmDefaults = (what)=>[
        `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} clinical detail and wording for ${what}, including anaesthetic, admission and follow-up arrangements.`,
        `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} whether any specific technique should be named on this page.`
    ];
const build = (d)=>({
        ...d,
        risks: [
            ...d.risks ?? [],
            ...generalRisks
        ],
        recovery: [
            ...d.recovery ?? [],
            ...generalRecovery
        ],
        questions: [
            ...d.questions ?? [],
            ...generalQuestions
        ],
        confirm: [
            ...d.confirm ?? [],
            ...confirmDefaults(d.nav.toLowerCase())
        ]
    });
/* ---------------------------------------------------------------------------
 * Rhinoplasty
 * ------------------------------------------------------------------------- */ const rhinoplasty = [
    build({
        slug: "rhinoplasty/reduction",
        section: "rhinoplasty",
        title: "Reduction rhinoplasty",
        nav: "Reduction rhinoplasty",
        metaTitle: "Reduction rhinoplasty in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Reduction rhinoplasty with Lucian Ion in London: reducing projection, length or width of the nose while keeping the result natural and the airway working.",
        standfirst: "The most frequent reason people ask about nose surgery: a nose that feels too prominent, too long or too wide for the face around it.",
        image: "nose-02.jpg",
        imageAlt: "Black and white profile study of a nose against a plain ground",
        concern: [
            "Reduction can mean any of several things — less projection at the tip, a shorter nose, a narrower bridge, a softer hump on the profile, or a combination. Most people describe it as wanting the nose to stop being the first thing they see.",
            "It is worth separating what bothers you from what you have been told bothers other people. A clear, specific description of your own concern is the most useful thing you can bring to a consultation."
        ],
        approach: [
            "Reduction is rarely subtraction alone. Taking away support can narrow the airway or let the tip drop over time, so structure is usually rebuilt as the size comes down.",
            "Planning uses standard photographs and 3D images with computer simulation, so the direction of change can be agreed before the day. A simulation shows an intention; soft tissue thickness and healing decide how closely it can be met."
        ],
        consultation: [
            "Expect an examination of the outside and the inside of the nose, including how well you breathe through each side, and a discussion of anything you have been treated for before.",
            "Photographs and imaging are taken so that the plan can be described in specific terms rather than adjectives, and so that follow-up can be compared fairly."
        ],
        limitations: [
            "Skin does not shrink to order. Thicker skin hides fine changes in the underlying framework.",
            "A nose cannot be reduced beyond what its support and the airway will tolerate.",
            "The result changes for many months as swelling resolves, and the tip settles last.",
            "Perfect symmetry is not an achievable aim, in the nose or anywhere else."
        ],
        alternatives: [
            {
                label: "Ultrasonic rhinoplasty, where bone reshaping is the main task",
                to: "/rhinoplasty/ultrasonic"
            },
            {
                label: "Chin augmentation, where profile balance is the real concern",
                to: "/facial-sculpting/chin-augmentation"
            },
            {
                label: "Deciding not to have surgery, which is always a reasonable option",
                to: "/contact-us"
            }
        ],
        risks: [
            "Changes to breathing, which may improve or occasionally worsen.",
            "Irregularities that become visible once swelling settles.",
            "Small residual asymmetries of the tip or bridge."
        ],
        recovery: [
            "Plan for a period of visible swelling and bruising around the nose and eyes.",
            "Ask about sleeping position, nose blowing, glasses and contact sports before your date."
        ],
        questions: [
            "Which parts of my nose would you change, and which would you leave alone?",
            "How would this affect my breathing?",
            "How long before the shape I see is close to the final one?"
        ],
        related: [
            "rhinoplasty/ultrasonic",
            "rhinoplasty/secondary",
            "facial-sculpting/chin-augmentation"
        ],
        confirm: []
    }),
    build({
        slug: "rhinoplasty/augmentation",
        section: "rhinoplasty",
        title: "Augmentation rhinoplasty",
        nav: "Augmentation rhinoplasty",
        metaTitle: "Augmentation rhinoplasty in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Augmentation rhinoplasty with Lucian Ion in London: adding height, projection and definition to an under-projected nose, including ethnic rhinoplasty.",
        standfirst: "Adding height or definition where the nose is under-projected — often, though not only, in patients of Asian, African or Middle Eastern heritage.",
        image: "nose-03.jpg",
        imageAlt: "Black and white three-quarter portrait study",
        concern: [
            "A flat bridge, a tip that lacks definition or a profile that reads as short can make the rest of the face look heavier than it is. The aim is usually more structure rather than a different identity.",
            "Patients frequently want to keep the character of their features. Saying that plainly at the start shapes the whole plan."
        ],
        approach: [
            "Augmentation depends on adding support, and where that support comes from is the central decision of the operation. The options and their trade-offs are discussed individually.",
            "Because added structure must be stable for decades, this is a conversation about durability as much as about shape."
        ],
        consultation: [
            "Assessment covers skin thickness, existing cartilage, the airway and the shape of the surrounding face.",
            "Imaging is used to show how much projection suits your face rather than how much is technically possible."
        ],
        limitations: [
            "Thicker skin softens definition, however carefully the framework is built.",
            "Added structure can shift or become visible over time.",
            "There is a limit to how much a given skin envelope will safely stretch."
        ],
        alternatives: [
            {
                label: "Reduction and refinement, where the bridge is not the issue",
                to: "/rhinoplasty/reduction"
            },
            {
                label: "Chin augmentation, where the profile reads short overall",
                to: "/facial-sculpting/chin-augmentation"
            }
        ],
        risks: [
            "Visibility, movement or asymmetry of added support over time.",
            "Additional recovery from a second site if material is taken from elsewhere."
        ],
        recovery: [
            "Recovery may involve a second site as well as the nose."
        ],
        questions: [
            "What would you use to build support in my case, and why that rather than the alternatives?",
            "How much projection would suit my face?",
            "How stable is this likely to be in ten or twenty years?"
        ],
        related: [
            "rhinoplasty/reduction",
            "rhinoplasty/secondary",
            "rhinoplasty/ultrasonic"
        ],
        confirm: [
            `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} which graft materials should be described on this page and in what terms.`
        ]
    }),
    build({
        slug: "rhinoplasty/deviated-crooked",
        section: "rhinoplasty",
        title: "Deviated and crooked nose",
        nav: "Deviated / crooked nose",
        metaTitle: "Deviated and crooked nose surgery in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Surgery for a deviated or crooked nose with Lucian Ion in London, addressing both the appearance and the function of the nose, including after injury.",
        standfirst: "A nose that sits off the midline, whether it grew that way or was injured, usually involves both appearance and breathing.",
        image: "nose-04.jpg",
        imageAlt: "Black and white frontal portrait study in soft light",
        concern: [
            "Crookedness may be in the bones, the septum, the cartilage of the tip, or all three, and the face behind it is often slightly asymmetric too. That combination is what makes these operations demanding.",
            "Many patients notice the breathing before the shape, or only realise how much they had adapted once it is corrected."
        ],
        approach: [
            "Straightening means releasing what is holding the nose off-centre and then supporting it in its new position, which is why correction and reconstruction happen in the same operation.",
            "The septum is usually part of the work, because the outside and the inside of the nose share the same framework."
        ],
        consultation: [
            "Examination includes the septum and the airway on each side, and photographs that record the asymmetry of the face as well as the nose.",
            "Any history of injury, previous surgery or nasal treatment is relevant and worth bringing details of."
        ],
        limitations: [
            "A nose has a memory: some drift back towards the original position can occur.",
            "Facial asymmetry behind the nose is not corrected by nose surgery and can still be visible.",
            "Improved breathing is an aim, not a guarantee, and allergy or lining problems are separate issues."
        ],
        alternatives: [
            {
                label: "Ultrasonic rhinoplasty for precise bone work",
                to: "/rhinoplasty/ultrasonic"
            },
            {
                label: "Treating the airway alone, where appearance is not a concern",
                to: "/contact-us"
            }
        ],
        risks: [
            "Residual or recurrent deviation.",
            "Breathing that does not improve as much as hoped.",
            "Septal complications, which are discussed individually."
        ],
        recovery: [
            "Internal healing continues after the outside looks settled."
        ],
        questions: [
            "Is my crookedness in the bone, the septum, the cartilage, or a combination?",
            "How much straighter is realistic in my case?",
            "Will this be a functional operation as well as an aesthetic one?"
        ],
        related: [
            "rhinoplasty/ultrasonic",
            "rhinoplasty/secondary",
            "rhinoplasty/reduction"
        ],
        confirm: [
            `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} how septal surgery and any functional element should be described, including insurance or referral routes if relevant.`
        ]
    }),
    build({
        slug: "rhinoplasty/secondary",
        section: "rhinoplasty",
        title: "Secondary rhinoplasty",
        nav: "Secondary rhinoplasty",
        metaTitle: "Secondary and revision rhinoplasty in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Secondary or revision rhinoplasty with Lucian Ion in London, for patients unhappy with the shape or breathing after previous nose surgery.",
        standfirst: "Also called revision rhinoplasty: among the most demanding operations in cosmetic surgery, and the one where expectations need the most care.",
        image: "nose-05.jpg",
        imageAlt: "Black and white profile study, close crop",
        concern: [
            "Patients come after previous surgery with a shape they dislike, breathing that has worsened, or both. Scarring, missing support and unpredictable tissue make a second operation a different proposition from a first.",
            "It is common to arrive tired of the process. Taking time over the assessment, rather than moving quickly to a date, tends to serve people better."
        ],
        approach: [
            "Secondary work is mostly about restoring structure before refining shape. What is missing has to be replaced, and only then can the outside be adjusted.",
            "Previous operation notes and pre-operative photographs, if you can obtain them, genuinely change how a plan is made."
        ],
        consultation: [
            "Expect a longer assessment, careful examination of the airway, and a frank conversation about what a second operation can and cannot reach.",
            "Timing since your last surgery is part of the discussion, and waiting is sometimes the right advice."
        ],
        limitations: [
            "Scarred tissue is less predictable and heals less evenly.",
            "Support that has been removed can only be replaced, not recovered.",
            "Aims are usually improvement rather than an ideal result, and further surgery is more likely than after a first operation."
        ],
        alternatives: [
            {
                label: "Waiting longer before deciding",
                to: "/contact-us"
            },
            {
                label: "Addressing breathing only, where the shape is acceptable",
                to: "/rhinoplasty/deviated-crooked"
            }
        ],
        risks: [
            "A higher chance of needing further surgery than after a first rhinoplasty.",
            "Less predictable healing and scarring inside the nose.",
            "Recovery from a second site if support has to be taken from elsewhere."
        ],
        recovery: [
            "Recovery is often longer than after a first operation and may involve a second site."
        ],
        questions: [
            "What do you think was done before, and what is missing now?",
            "What is realistically improvable, and what is not?",
            "How long should I wait, and what would waiting change?"
        ],
        related: [
            "rhinoplasty/reduction",
            "rhinoplasty/augmentation",
            "rhinoplasty/deviated-crooked"
        ],
        confirm: [
            `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} policy on revision cases operated elsewhere, including notes required and any waiting interval advised.`
        ]
    }),
    build({
        slug: "rhinoplasty/ultrasonic",
        section: "rhinoplasty",
        title: "Ultrasonic rhinoplasty",
        nav: "Ultrasonic rhinoplasty",
        metaTitle: "Ultrasonic rhinoplasty in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Ultrasonic rhinoplasty with Lucian Ion in London: instruments that cut and reshape nasal bone precisely while leaving the surrounding soft tissue intact.",
        standfirst: "Instruments developed to cut and reshape bone precisely, leaving the soft tissue around it alone. A way of working rather than a different operation.",
        image: "ultrasonic-02.jpg",
        imageAlt: "Black and white study of nasal profile in raking light",
        concern: [
            "Where the bridge is wide, deviated or carries a hump, the bone has to be reshaped. Traditionally this was done with instruments that broke bone along lines that could not be fully controlled.",
            "Ultrasonic instruments work on bone without cutting the soft tissue around it, which allows the shaping to be more deliberate."
        ],
        approach: [
            "Ultrasonic instrumentation is an established part of the practice and is used where precise bone work is what the plan requires. It is combined with the rest of the operation rather than replacing it.",
            "Precision in the bone does not change the soft tissue over it, so skin thickness still determines how much of the shaping shows."
        ],
        consultation: [
            "The discussion is about what your nose needs, then whether ultrasonic instruments are the best way to achieve it.",
            "Imaging is used in the same way as for any other rhinoplasty."
        ],
        limitations: [
            "It addresses bone. Cartilage, tip shape and skin need separate answers.",
            "It is a technique, not a guarantee of a particular result or a faster recovery.",
            "Access to the bone may make the operation longer than an equivalent conventional approach."
        ],
        alternatives: [
            {
                label: "Conventional bone reshaping",
                to: "/rhinoplasty/reduction"
            },
            {
                label: "Correction of a crooked nose",
                to: "/rhinoplasty/deviated-crooked"
            }
        ],
        questions: [
            "Would ultrasonic instruments help in my case, and for which part of the operation?",
            "What difference would it make to the result rather than to the technique?"
        ],
        related: [
            "rhinoplasty/reduction",
            "rhinoplasty/deviated-crooked",
            "rhinoplasty/secondary"
        ],
        confirm: [
            `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} how the ultrasonic training course and the British Society of Rhinoplasty Surgeons role should be referenced here, if at all.`
        ]
    })
];
/* ---------------------------------------------------------------------------
 * Facial sculpting
 * ------------------------------------------------------------------------- */ const facialSculpting = [
    build({
        slug: "facial-sculpting/chin-augmentation",
        section: "facial-sculpting",
        title: "Chin augmentation",
        nav: "Chin augmentation",
        metaTitle: "Chin augmentation in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Chin augmentation and chin enhancement with Lucian Ion in London, to balance the profile, the jawline and the neck.",
        standfirst: "A chin that sits back changes how the nose, the jawline and the neck are read. Adjusting it is often the quietest way to alter a profile.",
        image: "sculpting-02.jpg",
        imageAlt: "Black and white profile study of chin and jawline",
        concern: [
            "Many people who dislike their profile point at their nose when the chin is doing at least half of the work. A recessed chin also tends to make the under-chin area look fuller than it is.",
            "The change patients usually want is definition, not size."
        ],
        approach: [
            "Chin position can be altered by adding to the bone or by moving it, and the two routes suit different patients. The choice is made on the shape of the face and the amount of change needed.",
            "Because chin, jawline and neck read together, this is frequently planned alongside neck or nose work rather than alone."
        ],
        consultation: [
            "Assessment covers the profile, the bite, the position of the lower lip and the shape of the neck.",
            "3D imaging is used to show the effect of a change in proportion before anything is decided."
        ],
        limitations: [
            "It changes the framework, not the quality of the skin over it.",
            "A bite problem is a dental and orthodontic matter and is not corrected by contour surgery.",
            "Sensation in the lip and chin takes time to settle."
        ],
        alternatives: [
            {
                label: "Anterior neck lift, where the under-chin area is the concern",
                to: "/facial-sculpting/anterior-neck-lift"
            },
            {
                label: "Rhinoplasty, where the nose is the dominant feature",
                to: "/rhinoplasty/reduction"
            },
            {
                label: "Non-surgical contouring, where a temporary change is enough",
                to: "/contact-us"
            }
        ],
        risks: [
            "Altered sensation of the lower lip or chin.",
            "Asymmetry, or movement or visibility of an implant if one is used."
        ],
        questions: [
            "Is my profile mainly a chin issue or a nose issue?",
            "Would you add to the bone or move it, and why?",
            "How would this change my neck?"
        ],
        related: [
            "facial-sculpting/cheek-implants",
            "facial-sculpting/anterior-neck-lift",
            "rhinoplasty/reduction"
        ],
        confirm: []
    }),
    build({
        slug: "facial-sculpting/cheek-implants",
        section: "facial-sculpting",
        title: "Cheek implants",
        nav: "Cheek implants",
        metaTitle: "Cheek implants in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Cheek implants and midface contouring with Lucian Ion in London, for patients whose cheek support is structurally flat rather than deflated.",
        standfirst: "Where the midface is flat structurally rather than simply deflated, support can be added to the bone itself.",
        image: "sculpting-03.jpg",
        imageAlt: "Black and white portrait study, cheekbone in raking light",
        concern: [
            "Flat cheeks can make the midface look tired at any age and can leave the lower lids looking hollow. The question is always whether the shortfall is in the bone or in the soft tissue over it.",
            "That distinction decides whether an implant or a volume procedure is the better answer."
        ],
        approach: [
            "An implant changes the framework permanently and in a shape that is chosen in advance. It suits patients whose cheek projection was never there, more than those who have lost volume over time.",
            "Where the shortfall is soft tissue, fat transfer is usually the more appropriate route and is discussed on its own page."
        ],
        consultation: [
            "Assessment separates bony projection from soft tissue volume, using photographs and 3D imaging.",
            "Position matters more than size, and that is what the imaging is used to agree."
        ],
        limitations: [
            "An implant does not improve skin quality or lift descended tissue.",
            "It is a permanent device and may need revision or removal at some point.",
            "Facial asymmetry is usually still visible afterwards."
        ],
        alternatives: [
            {
                label: "Fat transfer, where volume rather than structure is missing",
                to: "/facial-sculpting/fat-transfer"
            },
            {
                label: "Facelift, where the tissue has descended",
                to: "/face-rejuvenation/facelift"
            }
        ],
        risks: [
            "Implant movement, visibility, infection or the need for removal.",
            "Altered sensation over the cheek."
        ],
        questions: [
            "Is my flatness in the bone or the soft tissue?",
            "Why an implant rather than fat transfer for me?",
            "What happens if it needs to come out?"
        ],
        related: [
            "facial-sculpting/fat-transfer",
            "facial-sculpting/chin-augmentation",
            "face-rejuvenation/facelift"
        ],
        confirm: [
            `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} whether cheek implants are currently offered and how prominently this page should sit; the live site lists it under facial sculpting.`
        ]
    }),
    build({
        slug: "facial-sculpting/anterior-neck-lift",
        section: "facial-sculpting",
        title: "Anterior neck lift",
        nav: "Anterior neck lift",
        metaTitle: "Anterior neck lift in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Anterior neck lift with Lucian Ion in London: correcting fullness and banding under the chin through a limited approach at the front of the neck.",
        standfirst: "Fullness and banding under the chin, treated from the front of the neck rather than from the sides.",
        image: "sculpting-04.jpg",
        imageAlt: "Black and white study of the neck and jawline in profile",
        concern: [
            "An indistinct line between the chin and the neck is one of the earliest things people notice in photographs, often before any other sign of ageing.",
            "What sits behind it varies: fat above or below the muscle, muscle bands that have separated, loose skin, or a chin that sits back."
        ],
        approach: [
            "An anterior approach works directly on the structures under the chin and suits patients whose problem is central rather than spread along the jawline.",
            "Where laxity extends to the sides of the neck, a wider operation is usually the more honest answer, and that is discussed rather than stretched to fit."
        ],
        consultation: [
            "Examination looks at where the fullness sits, how the muscle behaves and how much skin is loose, as well as at chin position.",
            "Photographs and imaging record the starting point in a way that makes follow-up meaningful."
        ],
        limitations: [
            "It addresses the central neck. Laxity along the jawline needs a different operation.",
            "Skin quality limits how sharply a contour can be defined.",
            "Ageing continues and the neck will change again."
        ],
        alternatives: [
            {
                label: "Deep plane neck lift for wider laxity",
                to: "/face-rejuvenation/deep-plane-neck-lift"
            },
            {
                label: "Chin augmentation, where chin position is the cause",
                to: "/facial-sculpting/chin-augmentation"
            },
            {
                label: "Facial liposuction, where the issue is fat alone",
                to: "/facial-sculpting/facial-liposuction"
            }
        ],
        risks: [
            "A scar under the chin.",
            "Contour irregularity or recurrent banding."
        ],
        questions: [
            "Is an anterior approach enough for my neck, or would I do better with a wider operation?",
            "How much of my problem is fat, muscle, skin or chin position?"
        ],
        related: [
            "face-rejuvenation/deep-plane-neck-lift",
            "facial-sculpting/chin-augmentation",
            "facial-sculpting/facial-liposuction"
        ],
        confirm: []
    }),
    build({
        slug: "facial-sculpting/buccal-fat-reduction",
        section: "facial-sculpting",
        title: "Buccal fat reduction",
        nav: "Buccal fat reduction",
        metaTitle: "Buccal fat reduction in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Buccal fat reduction with Lucian Ion in London: a small, carefully selected operation to reduce lower cheek fullness from inside the mouth.",
        standfirst: "A small operation on the fat pad in the lower cheek — and one where patient selection matters more than technique.",
        image: "sculpting-05.jpg",
        imageAlt: "Black and white portrait study of the lower cheek",
        concern: [
            "Some faces carry fullness low in the cheek that does not change with weight. In the right patient, reducing that pad defines the line between cheek and jaw.",
            "In the wrong patient it produces hollowing that becomes more obvious with age, which is why the assessment is the important part."
        ],
        approach: [
            "The approach is from inside the mouth, so there is no external scar. How much is removed is a judgement made conservatively, because it cannot be put back in the same form.",
            "The likely long-term effect on a face is part of the decision, not just the appearance in the months afterwards."
        ],
        consultation: [
            "Assessment distinguishes the buccal pad from muscle bulk, skin and general facial fullness.",
            "Imaging is used to discuss how the change would read over time as well as now."
        ],
        limitations: [
            "It is not a weight loss or jawline procedure.",
            "It is essentially irreversible.",
            "Faces become less full with age, which can make the change more pronounced later."
        ],
        alternatives: [
            {
                label: "Facial liposuction for more generalised fullness",
                to: "/facial-sculpting/facial-liposuction"
            },
            {
                label: "Leaving the pad alone, which is often the right advice",
                to: "/contact-us"
            }
        ],
        risks: [
            "Over-reduction and hollowing, which is difficult to correct.",
            "Asymmetry between the two sides."
        ],
        questions: [
            "Am I the right sort of candidate for this, and what makes you say so?",
            "How might my face look in fifteen or twenty years if I have it?",
            "What would you do instead in my case?"
        ],
        related: [
            "facial-sculpting/facial-liposuction",
            "facial-sculpting/fat-transfer",
            "facial-sculpting/chin-augmentation"
        ],
        confirm: []
    }),
    build({
        slug: "facial-sculpting/fat-transfer",
        section: "facial-sculpting",
        title: "Fat transfer",
        nav: "Fat transfer",
        metaTitle: "Facial fat transfer in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Facial fat transfer with Lucian Ion in London: using a patient's own fat to restore volume in the midface, temples and around the eyes.",
        standfirst: "Using your own fat to restore volume where it has been lost — usually the temples, the midface and the area around the eyes.",
        image: "sculpting-06.jpg",
        imageAlt: "Black and white portrait study, soft light across the midface",
        concern: [
            "Volume loss reads as tiredness rather than as ageing, and it is often what people mean when they say they look drawn. Lifting tissue does not replace what is no longer there.",
            "Fat transfer answers the volume part of that picture and is very often combined with other work."
        ],
        approach: [
            "Fat is taken from elsewhere on the body, prepared, and placed in small amounts in several layers so that it has a blood supply to survive on.",
            "Not all of it survives, and how much does varies between people. That is why more than one session is sometimes needed and why the plan is conservative."
        ],
        consultation: [
            "Assessment identifies where volume is genuinely missing, as opposed to where tissue has descended.",
            "A donor area is discussed, along with the recovery that comes with it."
        ],
        limitations: [
            "Survival of transferred fat is unpredictable and a second session may be needed.",
            "It adds volume; it does not lift or tighten.",
            "Results change if your weight changes significantly."
        ],
        alternatives: [
            {
                label: "Cheek implants, where the shortfall is structural",
                to: "/facial-sculpting/cheek-implants"
            },
            {
                label: "Facelift, where tissue has descended",
                to: "/face-rejuvenation/facelift"
            }
        ],
        risks: [
            "Uneven or incomplete survival of the transferred fat.",
            "Lumpiness, particularly in thin-skinned areas.",
            "Recovery at the donor site as well as the face."
        ],
        questions: [
            "Where exactly do I need volume, and where do I need lifting instead?",
            "How likely am I to need a second session?",
            "Where would the fat be taken from?"
        ],
        related: [
            "facial-sculpting/cheek-implants",
            "face-rejuvenation/facelift",
            "face-rejuvenation/blepharoplasty"
        ],
        confirm: []
    }),
    build({
        slug: "facial-sculpting/facial-liposuction",
        section: "facial-sculpting",
        title: "Facial liposuction",
        nav: "Facial liposuction",
        metaTitle: "Facial liposuction in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Facial and neck liposuction with Lucian Ion in London, for localised fullness under the chin and along the jawline where skin quality is good.",
        standfirst: "Removing localised fullness under the chin and along the jawline, where the skin is good enough to take up the slack.",
        image: "sculpting-07.jpg",
        imageAlt: "Black and white study of the jawline and under-chin area",
        concern: [
            "Fullness under the chin can sit stubbornly in people who are otherwise slim, and it blurs the line that gives a jaw its definition.",
            "Whether removing fat alone will help depends almost entirely on how well the skin retracts afterwards."
        ],
        approach: [
            "Where the skin is elastic and the excess is fat, a limited approach can define the contour with very small incisions.",
            "Where skin laxity or muscle banding is part of the picture, a lift is the more honest recommendation — and it is better to hear that at the consultation than afterwards."
        ],
        consultation: [
            "Examination tests skin elasticity as well as the amount and depth of the fat.",
            "Photographs from several angles record the starting point."
        ],
        limitations: [
            "It does not tighten skin or correct muscle bands.",
            "Results depend on your skin's ability to retract.",
            "Contour irregularities are possible in thin areas."
        ],
        alternatives: [
            {
                label: "Anterior neck lift, where skin or muscle is involved",
                to: "/facial-sculpting/anterior-neck-lift"
            },
            {
                label: "Deep plane neck lift for more significant laxity",
                to: "/face-rejuvenation/deep-plane-neck-lift"
            }
        ],
        risks: [
            "Contour irregularity, asymmetry or loose skin once the fullness is removed."
        ],
        questions: [
            "Will my skin retract well enough for this to work?",
            "Would a lift give me a better result than liposuction alone?"
        ],
        related: [
            "facial-sculpting/anterior-neck-lift",
            "face-rejuvenation/deep-plane-neck-lift",
            "facial-sculpting/buccal-fat-reduction"
        ],
        confirm: []
    }),
    build({
        slug: "facial-sculpting/otoplasty-pinnaplasty",
        section: "facial-sculpting",
        title: "Otoplasty and pinnaplasty",
        nav: "Otoplasty / pinnaplasty",
        metaTitle: "Otoplasty and pinnaplasty in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Ear reshaping surgery — otoplasty and pinnaplasty — with Lucian Ion in London, for prominent ears in adults and in children.",
        standfirst: "Reshaping prominent ears so that they sit closer to the head and read symmetrically from the front.",
        image: "sculpting-08.jpg",
        imageAlt: "Black and white profile study showing the ear",
        concern: [
            "Prominent ears are usually noticed in childhood and can carry on mattering into adult life. The aim is for ears that go unremarked rather than ears that look operated on.",
            "Both position and shape are involved; one ear is almost always different from the other."
        ],
        approach: [
            "The cartilage is reshaped and held in its new position through an incision behind the ear, where the scar is hidden.",
            "The aim is a natural fold and a position that looks unforced from the front, which matters more than how close the ear sits to the head."
        ],
        consultation: [
            "Both ears are assessed separately, because they rarely need the same amount of correction.",
            "For children, the timing of surgery and the child's own wish to have it are part of the discussion."
        ],
        limitations: [
            "Complete symmetry is not achievable.",
            "Cartilage can partially spring back.",
            "The shape of the ear itself, as distinct from its position, can only be changed so far."
        ],
        alternatives: [
            {
                label: "Waiting, particularly for younger children",
                to: "/contact-us"
            }
        ],
        risks: [
            "Partial recurrence of prominence.",
            "Scar thickening behind the ear.",
            "Residual asymmetry."
        ],
        questions: [
            "How much correction do I need on each side?",
            "How likely is the cartilage to move back?",
            "For a child, is this the right time?"
        ],
        related: [
            "facial-sculpting/chin-augmentation",
            "facial-sculpting/cheek-implants",
            "rhinoplasty/reduction"
        ],
        confirm: [
            `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} whether children are seen for ear surgery and from what age, and what the arrangements are.`
        ]
    })
];
/* ---------------------------------------------------------------------------
 * Face rejuvenation
 * ------------------------------------------------------------------------- */ const faceRejuvenation = [
    build({
        slug: "face-rejuvenation/facelift",
        section: "face-rejuvenation",
        title: "Facelift",
        nav: "Facelift",
        metaTitle: "Deep plane facelift in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Facelift surgery with Lucian Ion in London: repositioning the deeper layers of the face and neck for a rested rather than an altered appearance.",
        standfirst: "Repositioning the deeper layers of the face rather than pulling on the skin — the difference between looking rested and looking tightened.",
        image: "rejuvenation-02.jpg",
        imageAlt: "Black and white portrait study, three-quarter view",
        concern: [
            "The changes people describe are usually descent rather than looseness: a heaviness at the jawline, a fold beside the mouth, a cheek that has slipped down and left a hollow behind it.",
            "Most patients want to look like themselves on a good day. That is a reasonable aim and a useful way to describe it."
        ],
        approach: [
            "Work at the deeper layer allows tissue to be returned towards where it came from without tension on the skin, which is what keeps the result from looking stretched.",
            "The neck is usually part of the same plan, because the jawline is where face and neck meet and treating one alone rarely reads well."
        ],
        consultation: [
            "Assessment covers skin quality, volume loss, the neck, and your general health and medication.",
            "Photographs and 3D imaging describe the starting point and give the follow-up something to be measured against."
        ],
        limitations: [
            "Surgery repositions tissue; it does not stop ageing.",
            "Skin texture, sun damage and pigmentation are not improved by lifting.",
            "Volume that has been lost usually needs a separate answer.",
            "Scars are permanent, even when placed where they are least visible."
        ],
        alternatives: [
            {
                label: "Short scar facelift for earlier or more limited change",
                to: "/face-rejuvenation/short-scar-facelift"
            },
            {
                label: "Neck lift alone, where the neck is the whole concern",
                to: "/face-rejuvenation/deep-plane-neck-lift"
            },
            {
                label: "Fat transfer, where volume is the main issue",
                to: "/facial-sculpting/fat-transfer"
            },
            {
                label: "Non-surgical treatment, including doing nothing for now",
                to: "/contact-us"
            }
        ],
        risks: [
            "Temporary weakness or, rarely, lasting change in facial nerve function.",
            "Collection of blood under the skin requiring attention.",
            "Skin healing problems, particularly in smokers.",
            "Changes to the hairline or to the shape of the earlobe."
        ],
        recovery: [
            "Plan for several weeks before you would want to be photographed or at an event.",
            "Ask about hair washing, colouring, sleeping position and when you can return to exercise."
        ],
        questions: [
            "What would you include in my operation, and would the neck be part of it?",
            "Where would my scars be?",
            "Do I need volume as well as lifting?",
            "What would you expect this to look like in ten years?"
        ],
        related: [
            "face-rejuvenation/short-scar-facelift",
            "face-rejuvenation/deep-plane-neck-lift",
            "facial-sculpting/fat-transfer"
        ],
        confirm: [
            `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} how the deep plane technique should be described, and whether admission is day case or overnight.`
        ]
    }),
    build({
        slug: "face-rejuvenation/short-scar-facelift",
        section: "face-rejuvenation",
        title: "Short scar facelift",
        nav: "Short scar facelift",
        metaTitle: "Short scar facelift in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Short scar facelift with Lucian Ion in London: a more limited lift for patients with early changes in the cheek and jawline.",
        standfirst: "A more limited operation, with shorter scars, for patients whose changes are early and concentrated in the cheek and jawline.",
        image: "rejuvenation-03.jpg",
        imageAlt: "Black and white portrait study in soft light",
        concern: [
            "Some patients notice the beginnings of heaviness at the jawline while their neck is still good. A full operation would be more than they need.",
            "The judgement is whether a shorter approach can reach what is actually bothering them."
        ],
        approach: [
            "A shorter incision limits how far tissue can be redraped, so this suits a smaller amount of change and a neck that does not need work.",
            "Choosing a shorter scar where a longer one is needed produces an early recurrence, which is the trade-off to understand clearly."
        ],
        consultation: [
            "Assessment focuses on how much laxity there is and where, and particularly on the neck.",
            "If a fuller operation would serve you better, that is what will be recommended."
        ],
        limitations: [
            "It does very little for the neck.",
            "Less lifting is possible than with a full operation.",
            "It does not add lost volume or improve skin quality."
        ],
        alternatives: [
            {
                label: "Facelift, where there is more to address",
                to: "/face-rejuvenation/facelift"
            },
            {
                label: "Fat transfer for volume",
                to: "/facial-sculpting/fat-transfer"
            }
        ],
        risks: [
            "Earlier recurrence if the amount of laxity exceeds what a short scar approach can hold."
        ],
        questions: [
            "Am I suitable for a short scar operation, or would I do better with a full one?",
            "What would a short scar approach not address in my case?"
        ],
        related: [
            "face-rejuvenation/facelift",
            "face-rejuvenation/deep-plane-neck-lift",
            "facial-sculpting/fat-transfer"
        ],
        confirm: []
    }),
    build({
        slug: "face-rejuvenation/deep-plane-neck-lift",
        section: "face-rejuvenation",
        title: "Deep plane neck lift",
        nav: "Deep plane neck lift",
        metaTitle: "Deep plane neck lift in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Deep plane neck lift with Lucian Ion in London, addressing muscle, fat and skin to restore a defined line between jaw and neck.",
        standfirst: "Addressing the muscle, the fat and the skin of the neck together, so the line between jaw and neck is redefined rather than simply tightened.",
        image: "rejuvenation-04.jpg",
        imageAlt: "Black and white study of the neck and jawline",
        concern: [
            "The neck often shows change before the face, and it is the feature people most dislike in photographs taken from below.",
            "Bands, fullness and loose skin can all be present at once, and skin tightening alone will not correct them."
        ],
        approach: [
            "Working in the deeper layer allows the muscle and the tissue under it to be repositioned, which is what defines the angle under the chin.",
            "It is frequently combined with facelift surgery, because a treated neck next to an untreated jawline rarely looks settled."
        ],
        consultation: [
            "Examination identifies what is contributing — fat above or below the muscle, muscle bands, skin laxity, chin position or the position of the glands.",
            "Photographs and imaging record the contour from several angles."
        ],
        limitations: [
            "Skin quality limits how sharp a contour can be.",
            "Some structures deep in the neck set a floor on what can be achieved.",
            "The neck continues to age afterwards."
        ],
        alternatives: [
            {
                label: "Anterior neck lift for central fullness only",
                to: "/facial-sculpting/anterior-neck-lift"
            },
            {
                label: "Facelift, where the jawline and cheek are also involved",
                to: "/face-rejuvenation/facelift"
            },
            {
                label: "Facial liposuction, where the issue is fat with good skin",
                to: "/facial-sculpting/facial-liposuction"
            }
        ],
        risks: [
            "Contour irregularity or recurrent banding.",
            "Scars around the ear and under the chin.",
            "Temporary altered sensation in the neck and earlobe."
        ],
        questions: [
            "What is actually causing my neck to look like this?",
            "Would I get a better result if the face were included?",
            "How durable is this likely to be?"
        ],
        related: [
            "face-rejuvenation/facelift",
            "facial-sculpting/anterior-neck-lift",
            "facial-sculpting/chin-augmentation"
        ],
        confirm: []
    }),
    build({
        slug: "face-rejuvenation/brow-forehead-lift",
        section: "face-rejuvenation",
        title: "Brow and forehead lift",
        nav: "Brow / forehead lift",
        metaTitle: "Brow and forehead lift in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Brow lift and forehead lift with Lucian Ion in London, to raise a heavy brow and open the upper eyelid without a surprised appearance.",
        standfirst: "Raising a brow that has become heavy, and opening the upper lid — without producing the raised, surprised look that people rightly worry about.",
        image: "rejuvenation-05.jpg",
        imageAlt: "Black and white portrait study of the brow and eyes",
        concern: [
            "A descending brow crowds the upper eyelid and can make someone look stern or tired. It is often mistaken for excess eyelid skin.",
            "Treating the eyelid when the brow is the cause is a common way to end up disappointed, so telling them apart is the first task."
        ],
        approach: [
            "Brow position, brow shape and the height of the forehead are all considered, because the aim is a natural arch rather than elevation for its own sake.",
            "It is often planned together with eyelid surgery, where both contribute."
        ],
        consultation: [
            "Assessment separates brow descent from eyelid skin excess and checks eyelid and eye function.",
            "Hairline position and hair density influence where incisions can reasonably be placed."
        ],
        limitations: [
            "It does not remove forehead lines caused by muscle movement.",
            "Over-elevation looks unnatural, which is why the change is deliberately restrained.",
            "The hairline may be altered."
        ],
        alternatives: [
            {
                label: "Blepharoplasty, where the eyelid is the real issue",
                to: "/face-rejuvenation/blepharoplasty"
            },
            {
                label: "Non-surgical treatment of the brow",
                to: "/contact-us"
            }
        ],
        risks: [
            "Altered sensation or temporary weakness in the forehead.",
            "Hair thinning near the incision, or a changed hairline.",
            "Asymmetry of brow height."
        ],
        questions: [
            "Is my problem the brow, the eyelid, or both?",
            "How much elevation are you proposing, and where would the incisions be?",
            "Will this affect my hairline?"
        ],
        related: [
            "face-rejuvenation/blepharoplasty",
            "face-rejuvenation/facelift",
            "facial-sculpting/fat-transfer"
        ],
        confirm: []
    }),
    build({
        slug: "face-rejuvenation/blepharoplasty",
        section: "face-rejuvenation",
        title: "Blepharoplasty",
        nav: "Blepharoplasty",
        metaTitle: "Blepharoplasty — eyelid surgery in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Upper and lower eyelid surgery — blepharoplasty — with Lucian Ion in London, for hooding, puffiness and hollowing around the eyes.",
        standfirst: "Upper and lower eyelid surgery, for hooding above the eye and puffiness or hollowing below it.",
        image: "rejuvenation-07.jpg",
        imageAlt: "Black and white portrait study, close crop on the eyes",
        concern: [
            "The eyes are where people read tiredness. Upper lid skin can rest on the lashes; below, the complaint is usually puffiness, a shadow, or both at once.",
            "Lower lids are the more delicate problem, because volume, skin and support all interact there."
        ],
        approach: [
            "Upper lid surgery is mostly about how much skin can safely be removed, and in some patients the brow is the real cause.",
            "Lower lid surgery is about redistributing and supporting rather than simply removing; taking too much creates problems that are hard to undo."
        ],
        consultation: [
            "Assessment includes eyelid position and function, tear film, any dry eye history and brow position.",
            "Fat transfer or volume work is discussed where hollowing is part of the picture."
        ],
        limitations: [
            "Fine lines and skin texture around the eye are not corrected by surgery.",
            "Dark circles are often pigment or shadow rather than excess skin.",
            "Eyelid surgery does not lift the brow."
        ],
        alternatives: [
            {
                label: "Brow lift, where the brow is the cause",
                to: "/face-rejuvenation/brow-forehead-lift"
            },
            {
                label: "Fat transfer for hollowing",
                to: "/facial-sculpting/fat-transfer"
            }
        ],
        risks: [
            "Dry eye or irritation, which can persist.",
            "Change in eyelid position or difficulty closing the eye fully.",
            "Visible scarring or asymmetry between the two sides.",
            "Very rarely, changes in vision."
        ],
        recovery: [
            "Plan for a period of blurred vision, watering and light sensitivity; arrange screen-free time."
        ],
        questions: [
            "Do I need upper lids, lower lids, or the brow?",
            "Do I have any dry eye risk I should know about?",
            "Would volume help me as well as, or instead of, removal?"
        ],
        related: [
            "face-rejuvenation/brow-forehead-lift",
            "facial-sculpting/fat-transfer",
            "face-rejuvenation/facelift"
        ],
        confirm: []
    })
];
/* ---------------------------------------------------------------------------
 * Breast surgery
 * ------------------------------------------------------------------------- */ const breastSurgery = [
    build({
        slug: "breast-surgery/augmentation",
        section: "breast-surgery",
        title: "Breast augmentation",
        nav: "Breast augmentation",
        metaTitle: "Breast augmentation in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Breast augmentation with Lucian Ion in London: implant choice, position and proportion, with a frank account of the long-term commitment involved.",
        standfirst: "Adding volume and shape — and a decision that is as much about proportion and long-term commitment as about size.",
        image: "breasts-02.jpg",
        imageAlt: "Black and white study of the torso, studio light",
        concern: [
            "Reasons vary: breasts that never developed as much as expected, volume lost after pregnancy or weight change, or a noticeable difference between the two sides.",
            "Most patients arrive with a size in mind. The more useful conversation is about the proportions of your own chest and what it will carry well."
        ],
        approach: [
            "Implant choice, position and the shape of your existing breast all interact. The footprint of the chest, the skin envelope and the amount of natural tissue set the sensible range.",
            "This is a long-term decision: implants are not lifetime devices and further surgery at some stage is likely, which is worth accepting at the outset rather than later."
        ],
        consultation: [
            "Examination covers breast shape and footprint, skin quality, symmetry and nipple position.",
            "Implant type and placement are discussed together with what each means for the appearance and for future monitoring."
        ],
        limitations: [
            "Implants do not lift a breast that has descended; an uplift may be needed as well.",
            "Existing asymmetry usually remains visible to some degree.",
            "Rippling or implant edges may be felt or seen, particularly in thin patients.",
            "Breasts continue to change with age, weight and pregnancy."
        ],
        alternatives: [
            {
                label: "Breast uplift, with or without an implant",
                to: "/breast-surgery/uplift-mastopexy"
            },
            {
                label: "Deciding against surgery",
                to: "/contact-us"
            }
        ],
        risks: [
            "Capsular contracture — firmness and distortion from scar tissue around the implant.",
            "Implant rupture, rotation or malposition, and the need for further surgery.",
            "Changes in nipple or breast sensation.",
            "Effects on breastfeeding and on breast imaging, which are discussed individually.",
            "Rare implant-associated conditions, which are also discussed at consultation."
        ],
        recovery: [
            "Plan for restrictions on lifting, overhead reaching and exercise, and ask about support garments."
        ],
        questions: [
            "What size and shape range would suit my chest?",
            "Where would the implant sit, and why?",
            "How likely am I to need further surgery, and when?",
            "What does follow-up and monitoring involve?"
        ],
        related: [
            "breast-surgery/uplift-mastopexy",
            "breast-surgery/reduction",
            "breast-surgery/gynaecomastia"
        ],
        confirm: [
            `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} implant brands or types to be named, the practice's implant registry and warranty arrangements, and the long-term follow-up policy.`
        ]
    }),
    build({
        slug: "breast-surgery/reduction",
        section: "breast-surgery",
        title: "Breast reduction",
        nav: "Breast reduction",
        metaTitle: "Breast reduction in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Breast reduction with Lucian Ion in London: reducing size and reshaping and lifting at the same time, with a clear account of scars and trade-offs.",
        standfirst: "Reducing size, and at the same time reshaping and lifting — the two happen together rather than separately.",
        image: "breasts-03.jpg",
        imageAlt: "Black and white torso study, soft directional light",
        concern: [
            "Large breasts can cause neck, shoulder and back discomfort, skin irritation, difficulty with exercise and a limited choice of clothing. For many patients the physical symptoms matter as much as the appearance.",
            "Asymmetry is frequently part of the picture and is addressed in the same operation."
        ],
        approach: [
            "Reduction removes tissue and reshapes what remains, moving the nipple to a position that matches the new shape. The scar pattern follows from how much is being removed.",
            "The balance between how much is removed, the final shape and the length of the scars is decided with you, not for you."
        ],
        consultation: [
            "Assessment covers size, shape, skin quality, nipple position and any symptoms you have.",
            "Scar patterns are explained and drawn, along with what each one allows."
        ],
        limitations: [
            "Scars are unavoidable and permanent.",
            "Nipple sensation may change, and breastfeeding may be affected.",
            "Breasts continue to change afterwards with weight and time.",
            "Complete symmetry is not achievable."
        ],
        alternatives: [
            {
                label: "Breast uplift where size is acceptable but position is not",
                to: "/breast-surgery/uplift-mastopexy"
            },
            {
                label: "Non-surgical measures, including support and physiotherapy",
                to: "/contact-us"
            }
        ],
        risks: [
            "Delayed healing where the scars meet, which is not unusual.",
            "Loss of nipple sensation, and rarely problems with nipple blood supply.",
            "Asymmetry of shape, size or nipple position."
        ],
        recovery: [
            "Plan for support garments and restrictions on lifting and exercise."
        ],
        questions: [
            "What scar pattern would you use for me?",
            "How much smaller would you aim for, and how is that decided?",
            "What is the chance my nipple sensation changes?"
        ],
        related: [
            "breast-surgery/uplift-mastopexy",
            "breast-surgery/augmentation",
            "breast-surgery/gynaecomastia"
        ],
        confirm: [
            `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} scar patterns used, and whether any reduction work is undertaken on a non-cosmetic or insured basis.`
        ]
    }),
    build({
        slug: "breast-surgery/uplift-mastopexy",
        section: "breast-surgery",
        title: "Breast uplift (mastopexy)",
        nav: "Breast uplift / mastopexy",
        metaTitle: "Breast uplift and mastopexy in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Breast uplift or mastopexy with Lucian Ion in London: restoring breast position and shape, with or without an implant, after pregnancy or weight change.",
        standfirst: "Restoring position and shape rather than changing size — sometimes on its own, sometimes with a small implant.",
        image: "breasts-04.jpg",
        imageAlt: "Black and white torso study in low contrast light",
        concern: [
            "After pregnancy, breastfeeding or weight change, breasts often keep their volume but lose position, and the upper part empties.",
            "Patients frequently describe wanting their own breast back rather than a different one."
        ],
        approach: [
            "An uplift removes skin and reshapes the breast so it sits higher and fuller at the top. The scar pattern depends on how much lifting is needed.",
            "Where upper fullness is what is missing, a small implant may be combined with the uplift; combining them has its own trade-offs, which are discussed openly."
        ],
        consultation: [
            "Assessment covers nipple position, skin quality, volume distribution and symmetry.",
            "Whether to add an implant, and whether to do it in one stage or two, is discussed with the reasoning made explicit."
        ],
        limitations: [
            "An uplift does not add volume on its own.",
            "Scars are permanent and vary in how they mature.",
            "Some settling and recurrence of descent happens over time.",
            "Skin quality limits how much shape can be held."
        ],
        alternatives: [
            {
                label: "Breast augmentation alone, where position is acceptable",
                to: "/breast-surgery/augmentation"
            },
            {
                label: "Breast reduction, where size is also a concern",
                to: "/breast-surgery/reduction"
            }
        ],
        risks: [
            "Delayed healing at the scars.",
            "Changes in nipple sensation or position.",
            "Recurrent descent, particularly if an implant is combined with the uplift."
        ],
        recovery: [
            "Plan for support garments and a period without exercise or heavy lifting."
        ],
        questions: [
            "Do I need an uplift, an implant, or both?",
            "If both, would you do them in one operation or two?",
            "What scars would I have?"
        ],
        related: [
            "breast-surgery/augmentation",
            "breast-surgery/reduction",
            "breast-surgery/gynaecomastia"
        ],
        confirm: []
    }),
    build({
        slug: "breast-surgery/gynaecomastia",
        section: "breast-surgery",
        title: "Gynaecomastia surgery",
        nav: "Gynaecomastia",
        metaTitle: "Gynaecomastia surgery in London — Lucian Ion FRCS(Plast)",
        metaDescription: "Gynaecomastia surgery with Lucian Ion in London: treating breast tissue and fat in men to restore a flat, masculine chest contour.",
        standfirst: "Breast tissue and fat in men, treated to restore a flat chest contour — and the reason it is worth investigating before operating.",
        image: "breasts-05.jpg",
        imageAlt: "Black and white study of the male chest and torso",
        concern: [
            "Fullness of the male chest affects what men are willing to wear and whether they will swim or take their shirt off. It is common and rarely discussed.",
            "It may be firm breast tissue, fat, or both, and the mix decides how it is treated."
        ],
        approach: [
            "Fat responds to liposuction; firm glandular tissue has to be excised directly. Most patients need some of each, which is why assessment comes first.",
            "Where there is significant skin excess, managing the skin becomes part of the plan and changes what scars are involved."
        ],
        consultation: [
            "Assessment distinguishes glandular tissue from fat and considers medication, supplements and anything that might point to an underlying cause.",
            "Investigations are sometimes advised before surgery is planned."
        ],
        limitations: [
            "Recurrence is possible, particularly if an underlying cause continues.",
            "Skin retraction is not guaranteed, and loose skin may remain.",
            "Some scarring around the areola is usual."
        ],
        alternatives: [
            {
                label: "Investigating and treating an underlying cause first",
                to: "/contact-us"
            },
            {
                label: "Weight change, where the fullness is largely fat",
                to: "/contact-us"
            }
        ],
        risks: [
            "Contour irregularity, over-correction or a dished appearance.",
            "Changes in nipple sensation or position.",
            "Recurrence."
        ],
        recovery: [
            "Plan for a compression garment and restrictions on upper body exercise."
        ],
        questions: [
            "Is mine mostly fat or mostly gland?",
            "Should anything be investigated before we plan surgery?",
            "What would my chest look like if my weight changes afterwards?"
        ],
        related: [
            "breast-surgery/reduction",
            "facial-sculpting/facial-liposuction",
            "breast-surgery/augmentation"
        ],
        confirm: [
            `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIRM"]} which investigations are routinely arranged before gynaecomastia surgery, and any referral arrangements.`
        ]
    })
];
const procedures = [
    ...rhinoplasty,
    ...facialSculpting,
    ...faceRejuvenation,
    ...breastSurgery
];
const procedureBySlug = (slug)=>procedures.find((p)=>p.slug === slug);
const proceduresInSection = (section)=>procedures.filter((p)=>p.section === section);
}),
];

//# sourceMappingURL=src_218o5id._.js.map