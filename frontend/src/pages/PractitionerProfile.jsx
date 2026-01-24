import PractitionerNavbar from "../components/PractitionerNavbar";

export default function PractitionerProfile() {
  const practitioner = JSON.parse(localStorage.getItem("practitioner"));

  if (!practitioner) {
    return (
      <>
        <PractitionerNavbar />
        <div className="mt-32 text-center text-gray-600">
          Practitioner data not found.
        </div>
      </>
    );
  }

  return (
    <>
      <PractitionerNavbar />

      <div className="mt-32 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-[#1B3C53]">
            Practitioner Profile
          </h1>
          <p className="text-gray-500 mt-1">
            View your professional details
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          {/* Name + Status */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#1B3C53]">
                {practitioner.name || "Dr. Practitioner"}
              </h2>
              <p className="text-gray-500">
                {practitioner.email || "Email not available"}
              </p>
            </div>

            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold ${
                practitioner.verified
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {practitioner.verified ? "Verified" : "Pending Verification"}
            </span>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Specialization</p>
              <p className="font-semibold text-[#1B3C53] capitalize">
                {practitioner.specialization || "Not specified"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Practitioner ID</p>
              <p className="font-semibold text-[#1B3C53]">
                {practitioner.id || "N/A"}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200" />

          {/* Info Text */}
          <p className="text-sm text-gray-500">
            This information is visible to administrators and used to manage
            your sessions and therapies on the platform.
          </p>
        </div>
      </div>
    </>
  );
}
