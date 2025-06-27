const cardContainer = document.querySelector("#card-container");

const universityCourses = [
  {
    university: "Arizona State University",
    location: "Tempe, Arizona, United States Of America",
    course: "Biotechnology and Genomics",
    feePerYear: "AUD 1.00",
    duration: "26640 Year",
    degree: "Masters",
    imgSrc:
      "https://d1ekoi0y96oljv.cloudfront.net/media/university-logo/az.png",
  },
  {
    university: "University Of Cincinnati",
    location: "Cincinnati, United States Of America",
    course: "Applied Graphic Communication",
    feePerYear: "AUD 2.00",
    duration: "27960 Year",
    degree: "Bachelors",
    imgSrc:
      "https://d1ekoi0y96oljv.cloudfront.net/media/university-logo/images_WbN3Lyi.png",
  },
  {
    university: "Arizona State University",
    location: "Tempe, Arizona, United States Of America",
    course: "Atmospheric Science",
    feePerYear: "AUD 2.00",
    duration: "26640 Year",
    degree: "Graduate diploma",
    imgSrc:
      "https://d1ekoi0y96oljv.cloudfront.net/media/university-logo/az.png",
  },
  {
    university: "University Of Bridgeport",
    location: "Bridgeport, United States Of America",
    course: "Bachelor of Science in Medical Laboratory Science",
    feePerYear: "AUD 4.00",
    duration: "32860 Year",
    degree: "Bachelors",
    imgSrc:
      "https://d1ekoi0y96oljv.cloudfront.net/media/university-logo/aps504x498mediumtransparent-pad600x600f8f8f8.jpg",
  },
  {
    university: "University Of Bridgeport",
    location: "Bridgeport, United States Of America",
    course: "Bachelor of Science in Nursing",
    feePerYear: "AUD 4.00",
    duration: "32860 Year",
    degree: "Bachelors",
    imgSrc:
      "https://d1ekoi0y96oljv.cloudfront.net/media/university-logo/aps504x498mediumtransparent-pad600x600f8f8f8.jpg",
  },
  {
    university: "University Of Bridgeport",
    location: "Bridgeport, United States Of America",
    course: "Dental Hygiene",
    feePerYear: "AUD 32.00",
    duration: "39120 Year",
    degree: "Diploma",
    imgSrc:
      "https://d1ekoi0y96oljv.cloudfront.net/media/university-logo/aps504x498mediumtransparent-pad600x600f8f8f8.jpg",
  },
];

let cards = universityCourses
  .map(function (card) {
    return `<div id="card"
            class="md:w-full lg:w-[460px] md:h-[260px] h-[240px] w-[420px] shadow-xl rounded-xl border-2 border-transparent hover:border-blue-800 hover:-translate-y-1 transition-all duration-300 mt-8 mx-auto">
            <div id="head" class="flex mt-2 items-center justify-between border-b-2 border-gray-200">
                <div id="img-content" class="flex lg:gap-2 items-center w-fit">
                    <div id="image"
                        class="rounded-full mx-3 w-10 h-10 lg:w-16 lg:h-16 bg-[url(${card.imgSrc})] bg-cover bg-center">
                    </div>
                    <div id="name-address" class="w-[250px]">
                        <span
                            class="text-[14px] md:text-[18px] font-semibold hover:text-blue-900 cursor-pointer">${card.university}
                            </span> <br>
                        <span class="md:text-[14px] text-sm text-gray-600">${card.location}</span>
                    </div>
                </div>
                <div id="icon" class="px-2 h-10 w-10 pt-2 lg:mx-3 rounded-full hover:bg-gray-100">
                    <svg font-size="medium" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none">
                        <path
                            d="M11.2232 19.2905L11.2217 19.2892C8.62708 16.9364 6.55406 15.0515 5.11801 13.2946C3.69296 11.5512 3 10.0562 3 8.5C3 5.96348 4.97109 4 7.5 4C8.9377 4 10.3341 4.67446 11.2412 5.73128L12 6.61543L12.7588 5.73128C13.6659 4.67446 15.0623 4 16.5 4C19.0289 4 21 5.96348 21 8.5C21 10.0562 20.307 11.5512 18.882 13.2946C17.4459 15.0515 15.3729 16.9364 12.7783 19.2892L12.7768 19.2905L12 19.9977L11.2232 19.2905Z"
                            stroke="#2C2F3A" stroke-width="2"></path>
                    </svg>
                </div>
            </div>
            <div id="card-body" class="p-4 h-[130px] flex flex-col gap-6">
                <div id="couse-details" class="mt-2">
                    <span id="d-head" class="pb-2 text-gray-600 text-sm  md:text-[14px]">Course Name</span><br>
                    <span id="name"
                        class="font-semibold hover:text-blue-900 cursor-pointer text-base md:text-lg">${card.course}</span>
                </div>
                <div id="extras" class="flex gap-10">
                    <div id="fee">
                        <span id="fee-head" class="text-xs text-gray-600">
                            Fee per year
                        </span><br>
                        <span id="amount" class="text-xs text-gray-600 font-semibold hover:text-blue-900">${card.feePerYear}</span>
                    </div>
                    <div id="duration">
                        <span id="duration-head" class="text-xs text-gray-600">
                            Duration
                        </span><br>
                        <span id="duration" class="text-xs text-gray-600 font-semibold hover:text-blue-900">${card.duration}</span>
                    </div>
                    <div id="degree">
                        <span id="degree-head" class="text-xs text-gray-600">
                            Degree
                        </span><br>
                        <span id="degree" class="text-xs text-gray-600 font-semibold hover:text-blue-900">Masters
                        </span>
                    </div>
                </div>
            </div>
        </div>`;
  })
  .join("");

cardContainer.insertAdjacentHTML("beforeend", cards);
