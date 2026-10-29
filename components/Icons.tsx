import type { SVGProps } from "react";
import type { IconName } from "@/lib/content";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

/** Inline stroke icons (Feather/Lucide style). Decorative by default. */
export function Icon({ name, ...rest }: IconProps) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    ...rest,
  };

  switch (name) {
    case "bolt":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case "conduit":
      return (
        <svg {...common}>
          <path d="M3 7h6a4 4 0 0 1 4 4v2a4 4 0 0 0 4 4h4" />
          <path d="M3 4v6" />
          <path d="M21 14v6" />
          <path d="M9 14a4 4 0 0 0-4 4v2" />
        </svg>
      );
    case "solar":
      return (
        <svg {...common}>
          <path d="M4 14h16l-2-7H6z" />
          <path d="M8.5 7 7.5 14" />
          <path d="m15.5 7 1 7" />
          <path d="M4 10.5h16" />
          <path d="M12 14v6" />
          <path d="M9 20h6" />
          <path d="M18 3v1" />
          <path d="m20.5 4.5-.7.7" />
        </svg>
      );
    case "lighting":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
      );
    case "automation":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3" />
          <path d="M15 1v3" />
          <path d="M9 20v3" />
          <path d="M15 20v3" />
          <path d="M20 9h3" />
          <path d="M20 14h3" />
          <path d="M1 9h3" />
          <path d="M1 14h3" />
        </svg>
      );
    case "cctv":
      return (
        <svg {...common}>
          <path d="M3 8.5 15 5l1.5 4.5L5 13z" />
          <path d="M16.5 9.5 20 8.5" />
          <path d="M7 13.5v4h4" />
          <path d="M3 20h8" />
          <path d="M19 3a3 3 0 0 1 2 2" />
        </svg>
      );
    case "earthing":
      return (
        <svg {...common}>
          <path d="M12 3v9" />
          <path d="M6 12h12" />
          <path d="M8 16h8" />
          <path d="M10 20h4" />
          <path d="m15 3-2 3h3l-2 3" />
        </svg>
      );
    case "maintenance":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "contracting":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 21v-6h6v6" />
          <path d="M12 11h.01" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "cable":
      return (
        <svg {...common}>
          <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10" />
          <path d="M8 6V3" />
          <path d="M16 6V3" />
          <path d="M9 20v-4" />
          <path d="M15 20v-4" />
        </svg>
      );
    case "headset":
      return (
        <svg {...common}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    case "document":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "tools":
      return (
        <svg {...common}>
          <path d="m14.5 4.5 5 5" />
          <path d="m3 21 9-9" />
          <path d="M9.5 9.5 4 4l-1 3 3 3 3-1" />
          <path d="m20 10-2.5 2.5-6-6L14 4" />
          <path d="m14 15 5 5 2-2-5-5" />
        </svg>
      );
    case "lifebuoy":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
        </svg>
      );
    case "check":
      return (
        <svg {...common} strokeWidth={3}>
          <path d="m20 6-11 11-5-5" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.9 9.88zm8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.49-8.41z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 7L2 7" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
          <path d="M9 3v15" />
          <path d="M15 6v15" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "zoom":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
          <path d="M11 8v6" />
          <path d="M8 11h6" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      );
    case "quote":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M7.17 17A4.17 4.17 0 0 1 3 12.83V12a7 7 0 0 1 7-7v2.5A4.5 4.5 0 0 0 5.5 12H8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2zm9 0A4.17 4.17 0 0 1 12 12.83V12a7 7 0 0 1 7-7v2.5a4.5 4.5 0 0 0-4.5 4.5H17a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.5 6.5h.01" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M16.5 3a4.6 4.6 0 0 0 3.5 3.6V10a8 8 0 0 1-3.5-1v6.3a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v3.5a2.4 2.4 0 1 0 1.5 2.2V3h3.4z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M6.5 8.5h-3V21h3V8.5zM5 3.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM21 13.6c0-3.3-1.8-5.3-4.6-5.3-1.6 0-2.7.8-3.2 1.7V8.5h-3V21h3v-6.6c0-1.6.6-2.6 2-2.6 1.3 0 1.8 1 1.8 2.6V21h3v-7.4z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M17.75 3h3.07l-6.71 7.67L22 21h-6.18l-4.84-6.33L5.44 21H2.37l7.18-8.2L2 3h6.34l4.37 5.78L17.75 3zm-1.08 16.17h1.7L7.4 4.74H5.57l11.1 14.43z" />
        </svg>
      );
    default:
      return null;
  }
}
