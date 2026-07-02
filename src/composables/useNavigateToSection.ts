import { useRouter } from "vue-router";

export default function useNavigateToSection() {
  const router = useRouter();

  const navigate = async (index: number) => {
    await router.push("/");

    const section = document.getElementById(`section-${index}`);

    if (section) {
      section.scrollIntoView({ behavior: "instant" });
    }
  };

  return { navigate };
}
